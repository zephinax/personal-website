"use client"

import {
  RotateCcwIcon,
  TrophyIcon,
  Undo2Icon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react"
import * as React from "react"
import { useCallback, useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  getIsAudioMuted,
  playGameOverSound,
  playMergeSound,
  playSlideSound,
  playWinSound,
  setIsAudioMuted,
} from "@/lib/game-2048-audio"
import { cn } from "@/lib/utils"

import { MysteryBoxIcon } from "./mystery-box-icon"

export type Tile = {
  id: string
  value: number
  row: number
  col: number
  isNew?: boolean
  isMerged?: boolean
}

type HistoryEntry = {
  tiles: Tile[]
  score: number
}

const STORAGE_KEYS = {
  bestScore: "zephinax-2048-best-score",
  savedGame: "zephinax-2048-saved-game",
}

let tileIdCounter = 0
function generateTileId(): string {
  tileIdCounter += 1
  return `t-${Date.now()}-${tileIdCounter}`
}

function getEmptyCells(tiles: Tile[]): { row: number; col: number }[] {
  const occupied = new Set(tiles.map((t) => `${t.row},${t.col}`))
  const empty: { row: number; col: number }[] = []
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      if (!occupied.has(`${r},${c}`)) {
        empty.push({ row: r, col: c })
      }
    }
  }
  return empty
}

function spawnRandomTile(tiles: Tile[]): Tile | null {
  const empty = getEmptyCells(tiles)
  if (empty.length === 0) return null
  const cell = empty[Math.floor(Math.random() * empty.length)]
  const value = Math.random() < 0.9 ? 2 : 4
  return {
    id: generateTileId(),
    value,
    row: cell.row,
    col: cell.col,
    isNew: true,
  }
}

function checkCanMove(tiles: Tile[]): boolean {
  if (tiles.length < 16) return true
  const grid: (number | null)[][] = Array.from({ length: 4 }, () =>
    Array(4).fill(null)
  )
  for (const t of tiles) {
    grid[t.row][t.col] = t.value
  }

  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      const val = grid[r][c]
      if (val === null) return true
      if (c < 3 && val === grid[r][c + 1]) return true
      if (r < 3 && val === grid[r + 1][c]) return true
    }
  }
  return false
}

function getTileColor(value: number): string {
  switch (value) {
    case 2:
      return "bg-zinc-100 text-zinc-900 border border-zinc-200/90 shadow-2xs dark:bg-zinc-800/90 dark:text-zinc-100 dark:border-zinc-700/80"
    case 4:
      return "bg-zinc-200 text-zinc-900 border border-zinc-300 shadow-2xs dark:bg-zinc-700 dark:text-zinc-50 dark:border-zinc-600"
    case 8:
      return "bg-zinc-300 text-zinc-950 border border-zinc-400 font-semibold shadow-xs dark:bg-zinc-600 dark:text-zinc-50 dark:border-zinc-500"
    case 16:
      return "bg-zinc-400 text-zinc-950 border border-zinc-500 font-semibold shadow-xs dark:bg-zinc-500 dark:text-zinc-950 dark:border-zinc-400"
    case 32:
      return "bg-zinc-600 text-zinc-50 font-bold shadow-xs dark:bg-zinc-400 dark:text-zinc-950"
    case 64:
      return "bg-zinc-800 text-zinc-50 font-bold shadow-xs dark:bg-zinc-300 dark:text-zinc-950"
    case 128:
      return "bg-zinc-900 text-zinc-50 font-bold shadow-sm ring-1 ring-zinc-500/50 dark:bg-zinc-200 dark:text-zinc-950"
    case 256:
      return "bg-zinc-950 text-white font-bold shadow-sm ring-1 ring-zinc-400 dark:bg-zinc-100 dark:text-zinc-950"
    case 512:
      return "bg-black text-white font-black shadow-md ring-2 ring-primary/40 dark:bg-white dark:text-black"
    case 1024:
      return "bg-black text-white font-black shadow-lg ring-2 ring-foreground/60 dark:bg-white dark:text-black"
    case 2048:
      return "bg-foreground text-background font-black shadow-xl ring-2 ring-foreground ring-offset-2 ring-offset-background"
    default:
      return "bg-gradient-to-br from-zinc-900 to-black text-white font-black shadow-2xl ring-2 ring-foreground dark:from-zinc-100 dark:to-white dark:text-black"
  }
}

function getTileFontSize(value: number): string {
  if (value < 100) return "text-2xl sm:text-3xl"
  if (value < 1000) return "text-xl sm:text-2xl"
  if (value < 10000) return "text-base sm:text-lg"
  return "text-xs sm:text-sm"
}

export function Game2048() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [score, setScore] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(0)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [hasWon, setHasWon] = useState<boolean>(false)
  const [keepPlaying, setKeepPlaying] = useState<boolean>(false)
  const [isGameOver, setIsGameOver] = useState<boolean>(false)
  const [isMuted, setIsMutedState] = useState<boolean>(false)

  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const lastMoveTimeRef = useRef<number>(0)
  const boardRef = useRef<HTMLDivElement>(null)

  // Initialize and load saved state from localStorage
  const initGame = useCallback(() => {
    const tile1 = spawnRandomTile([])
    const tile2 = tile1 ? spawnRandomTile([tile1]) : null
    const initialTiles = [tile1, tile2].filter(Boolean) as Tile[]

    setTiles(initialTiles)
    setScore(0)
    setHistory([])
    setHasWon(false)
    setKeepPlaying(false)
    setIsGameOver(false)
  }, [])

  useEffect(() => {
    // Load best score
    try {
      const storedBest = localStorage.getItem(STORAGE_KEYS.bestScore)
      if (storedBest) {
        setBestScore(Number(storedBest) || 0)
      }
      setIsMutedState(getIsAudioMuted())

      // Load saved active game if available
      const saved = localStorage.getItem(STORAGE_KEYS.savedGame)
      if (saved) {
        const parsed = JSON.parse(saved) as {
          tiles?: Tile[]
          score?: number
          hasWon?: boolean
          keepPlaying?: boolean
          isGameOver?: boolean
        }
        if (Array.isArray(parsed.tiles) && parsed.tiles.length > 0) {
          setTiles(parsed.tiles)
          setScore(parsed.score || 0)
          setHasWon(parsed.hasWon || false)
          setKeepPlaying(parsed.keepPlaying || false)
          setIsGameOver(parsed.isGameOver || false)
          return
        }
      }
    } catch {}

    initGame()
  }, [initGame])

  // Save game state (debounced so disk I/O does not block animation frames)
  useEffect(() => {
    if (tiles.length === 0) return
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(
          STORAGE_KEYS.savedGame,
          JSON.stringify({
            tiles,
            score,
            hasWon,
            keepPlaying,
            isGameOver,
          })
        )
      } catch {}
    }, 200)
    return () => clearTimeout(timer)
  }, [tiles, score, hasWon, keepPlaying, isGameOver])

  // Update best score
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
      try {
        localStorage.setItem(STORAGE_KEYS.bestScore, String(score))
      } catch {}
    }
  }, [score, bestScore])

  // Core movement calculation
  const move = useCallback(
    (direction: "UP" | "DOWN" | "LEFT" | "RIGHT") => {
      if (isGameOver) return
      if (hasWon && !keepPlaying) return

      const now = performance.now()
      if (now - lastMoveTimeRef.current < 75) return
      lastMoveTimeRef.current = now

      let hasChanged = false
      let scoreGain = 0
      let reachedNew2048 = false
      let highestMergedValue = 0

      const newTiles: Tile[] = []

      // Helper to process a line of tiles
      const processLine = (
        lineTiles: Tile[],
        targetCoordinates: (index: number) => { row: number; col: number }
      ) => {
        let targetIndex = 0
        let i = 0

        while (i < lineTiles.length) {
          const current = lineTiles[i]
          const next = lineTiles[i + 1]

          if (next && current.value === next.value) {
            const mergedVal = current.value * 2
            scoreGain += mergedVal
            if (mergedVal === 2048) reachedNew2048 = true
            if (mergedVal > highestMergedValue) highestMergedValue = mergedVal

            const coords = targetCoordinates(targetIndex)
            newTiles.push({
              id: generateTileId(),
              value: mergedVal,
              row: coords.row,
              col: coords.col,
              isMerged: true,
            })
            targetIndex++
            i += 2
            hasChanged = true
          } else {
            const coords = targetCoordinates(targetIndex)
            if (current.row !== coords.row || current.col !== coords.col) {
              hasChanged = true
            }
            newTiles.push({
              id: current.id,
              value: current.value,
              row: coords.row,
              col: coords.col,
            })
            targetIndex++
            i += 1
          }
        }
      }

      if (direction === "LEFT") {
        for (let r = 0; r < 4; r++) {
          const line = tiles
            .filter((t) => t.row === r)
            .sort((a, b) => a.col - b.col)
          processLine(line, (idx) => ({ row: r, col: idx }))
        }
      } else if (direction === "RIGHT") {
        for (let r = 0; r < 4; r++) {
          const line = tiles
            .filter((t) => t.row === r)
            .sort((a, b) => b.col - a.col)
          processLine(line, (idx) => ({ row: r, col: 3 - idx }))
        }
      } else if (direction === "UP") {
        for (let c = 0; c < 4; c++) {
          const line = tiles
            .filter((t) => t.col === c)
            .sort((a, b) => a.row - b.row)
          processLine(line, (idx) => ({ row: idx, col: c }))
        }
      } else if (direction === "DOWN") {
        for (let c = 0; c < 4; c++) {
          const line = tiles
            .filter((t) => t.col === c)
            .sort((a, b) => b.row - a.row)
          processLine(line, (idx) => ({ row: 3 - idx, col: c }))
        }
      }

      if (!hasChanged) return

      // Save previous state to history before changing
      setHistory((prev) => [{ tiles: [...tiles], score }, ...prev.slice(0, 9)])

      // Spawn a new tile
      const spawned = spawnRandomTile(newTiles)
      const finalTiles = spawned ? [...newTiles, spawned] : newTiles

      setTiles(finalTiles)
      setScore((prev) => prev + scoreGain)

      // Audio feedback
      if (highestMergedValue > 0) {
        playMergeSound(highestMergedValue)
      } else {
        playSlideSound()
      }

      // Check win condition
      if (reachedNew2048 && !hasWon) {
        setHasWon(true)
        playWinSound()
      }

      // Check game over condition
      if (!checkCanMove(finalTiles)) {
        setIsGameOver(true)
        playGameOverSound()
      }
    },
    [tiles, isGameOver, hasWon, keepPlaying, score]
  )

  // Undo last step
  const handleUndo = useCallback(() => {
    if (history.length === 0) return
    const [previous, ...rest] = history
    setTiles(previous.tiles)
    setScore(previous.score)
    setHistory(rest)
    setIsGameOver(false)
  }, [history])

  // Toggle sound
  const handleToggleSound = useCallback(() => {
    setIsMutedState((prev) => {
      const next = !prev
      setIsAudioMuted(next)
      return next
    })
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
        case "k":
          e.preventDefault()
          move("UP")
          break
        case "ArrowDown":
        case "s":
        case "S":
        case "j":
          e.preventDefault()
          move("DOWN")
          break
        case "ArrowLeft":
        case "a":
        case "A":
        case "h":
          e.preventDefault()
          move("LEFT")
          break
        case "ArrowRight":
        case "d":
        case "D":
        case "l":
          e.preventDefault()
          move("RIGHT")
          break
        case "z":
        case "Z":
          if (e.metaKey || e.ctrlKey) {
            e.preventDefault()
            handleUndo()
          }
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [move, handleUndo])

  // Touch gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return
    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStartRef.current.x
    const dy = touch.clientY - touchStartRef.current.y
    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    const threshold = 25 // Snappy 25px threshold
    if (Math.max(absDx, absDy) > threshold) {
      if (absDx > absDy) {
        move(dx > 0 ? "RIGHT" : "LEFT")
      } else {
        move(dy > 0 ? "DOWN" : "UP")
      }
    }
    touchStartRef.current = null
  }

  return (
    <div className="flex flex-col gap-4 select-none">
      {/* Game Header */}
      <div className="flex items-center justify-between gap-2 border-b border-line pb-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground">
            <MysteryBoxIcon className="size-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-mono text-base font-bold tracking-tight">
              2048
              <Button
                variant="ghost"
                size="icon-xs"
                onClick={handleToggleSound}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="size-7 rounded-md text-muted-foreground hover:text-foreground"
              >
                {isMuted ? (
                  <VolumeXIcon className="size-3.5" />
                ) : (
                  <Volume2Icon className="size-3.5" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Merge tiles to reach 2048
            </p>
          </div>
        </div>
      </div>
      {/* Toolbar actions */}
      <div className="flex items-center justify-between gap-2">
        {/* Score Badges */}
        <div className="flex items-center gap-2">
          <div className="flex min-w-16 gap-1 items-center rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1">
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              Score
            </span>
            <span className="font-mono text-sm font-bold tracking-tight">
              {score}
            </span>
          </div>

          <div className="flex min-w-16 gap-1 items-center rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1">
            <span className="font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              Best
            </span>
            <span className="font-mono text-sm font-bold tracking-tight text-foreground">
              {bestScore}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            aria-label="Restart"
            onClick={initGame}
            className="h-7 gap-1 px-2.5 font-mono text-xs"
          >
            <RotateCcwIcon className="size-3" />

          </Button>

          <Button
            variant="outline"
            size="sm"
            aria-label="Undo"
            disabled={history.length === 0}
            onClick={handleUndo}
            className="h-7 gap-1 px-2.5 font-mono text-xs disabled:opacity-40"
          >
            <Undo2Icon className="size-3" />
          </Button>
        </div>
      </div>
      {/* Game Board */}
      <div
        ref={boardRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative mx-auto aspect-square w-full max-w-[340px] touch-none overflow-hidden rounded-xl border border-line bg-muted/20 p-2 sm:max-w-[360px] sm:p-2.5"
      >
        {/* Background 4x4 Cells */}
        <div className="absolute inset-2 flex flex-wrap sm:inset-2.5">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="h-1/4 w-1/4 p-1 sm:p-1.5">
              <div className="h-full w-full rounded-lg border border-border/40 bg-muted/30 dark:bg-zinc-800/20" />
            </div>
          ))}
        </div>

        {/* Foreground Animated Tiles (GPU-accelerated via translate3d) */}
        <div className="pointer-events-none absolute inset-2 sm:inset-2.5">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="absolute top-0 left-0 h-1/4 w-1/4 p-1 transition-transform duration-100 ease-out will-change-transform sm:p-1.5"
              style={{
                transform: `translate3d(${tile.col * 100}%, ${tile.row * 100}%, 0)`,
              }}
            >
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center rounded-lg select-none",
                  "font-mono font-bold",
                  getTileColor(tile.value),
                  tile.isNew && "animate-in duration-150 ease-out zoom-in-50",
                  tile.isMerged &&
                    "animate-in duration-150 ease-out zoom-in-110"
                )}
              >
                <span className={getTileFontSize(tile.value)}>
                  {tile.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Win Overlay */}
        {hasWon && !keepPlaying && (
          <div className="absolute inset-0 z-20 flex animate-in flex-col items-center justify-center bg-background/85 p-6 text-center backdrop-blur-xs duration-200 zoom-in-95 fade-in">
            <TrophyIcon className="mb-2 size-8 text-foreground" />
            <h3 className="font-mono text-xl font-bold tracking-tight">
              You Win!
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              You reached 2048! Keep going to reach 4096.
            </p>
            <div className="mt-4 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setKeepPlaying(true)}
              >
                Keep Going
              </Button>
              <Button size="sm" onClick={initGame}>
                New Game
              </Button>
            </div>
          </div>
        )}

        {/* Game Over Overlay */}
        {isGameOver && (
          <div className="absolute inset-0 z-20 flex animate-in flex-col items-center justify-center bg-background/85 p-6 text-center backdrop-blur-xs duration-200 zoom-in-95 fade-in">
            <h3 className="font-mono text-xl font-bold tracking-tight">
              Game Over
            </h3>
            <p className="mt-1 text-xs text-muted-foreground">
              No more moves available. Final score: {score}
            </p>
            <Button size="sm" onClick={initGame} className="mt-4">
              Try Again
            </Button>
          </div>
        )}
      </div>

      {/* On-screen Directional Controls for Mobile / Mouse */}
      <div className="flex flex-col items-center gap-1.5 sm:hidden">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => move("UP")}
          aria-label="Move Up"
          className="size-9 touch-manipulation font-bold select-none active:scale-95"
        >
          ↑
        </Button>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => move("LEFT")}
            aria-label="Move Left"
            className="size-9 touch-manipulation font-bold select-none active:scale-95"
          >
            ←
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => move("DOWN")}
            aria-label="Move Down"
            className="size-9 touch-manipulation font-bold select-none active:scale-95"
          >
            ↓
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => move("RIGHT")}
            aria-label="Move Right"
            className="size-9 touch-manipulation font-bold select-none active:scale-95"
          >
            →
          </Button>
        </div>
      </div>

      {/* Keyboard hints footer */}
      <div className="flex items-center justify-between border-t border-line pt-3 text-xs text-muted-foreground">
        <span className="hidden sm:inline">Use Arrow keys or WASD</span>
        <span className="sm:hidden">Swipe or tap arrows</span>
        <div className="flex items-center gap-1">
          <Kbd>↑</Kbd>
          <Kbd>↓</Kbd>
          <Kbd>←</Kbd>
          <Kbd>→</Kbd>
        </div>
      </div>
    </div>
  )
}
