"use client"

let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

const LOCAL_STORAGE_MUTE_KEY = "zephinax-2048-muted"

export function getIsAudioMuted(): boolean {
  if (typeof window === "undefined") return false
  try {
    return localStorage.getItem(LOCAL_STORAGE_MUTE_KEY) === "true"
  } catch {
    return false
  }
}

export function setIsAudioMuted(muted: boolean): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(LOCAL_STORAGE_MUTE_KEY, muted ? "true" : "false")
  } catch {}
}

export function playSlideSound(): void {
  if (getIsAudioMuted()) return
  const ctx = getAudioContext()
  if (!ctx) return

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  osc.type = "sine"
  const now = ctx.currentTime
  osc.frequency.setValueAtTime(260, now)
  osc.frequency.exponentialRampToValueAtTime(140, now + 0.04)

  gain.gain.setValueAtTime(0.06, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.04)
}

export function playMergeSound(value: number): void {
  if (getIsAudioMuted()) return
  const ctx = getAudioContext()
  if (!ctx) return

  const osc = ctx.createOscillator()
  const gain = ctx.createGain()

  // Pitch scales musically with tile tier
  const tier = Math.min(11, Math.max(1, Math.round(Math.log2(value))))
  const baseFreqs = [
    261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99, 880.0,
    1046.5,
  ]
  const freq = baseFreqs[tier - 1] ?? 523.25

  osc.type = "triangle"
  const now = ctx.currentTime
  osc.frequency.setValueAtTime(freq, now)
  osc.frequency.exponentialRampToValueAtTime(freq * 1.25, now + 0.08)

  gain.gain.setValueAtTime(0.08, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09)

  osc.connect(gain)
  gain.connect(ctx.destination)

  osc.start(now)
  osc.stop(now + 0.09)
}

export function playWinSound(): void {
  if (getIsAudioMuted()) return
  const ctx = getAudioContext()
  if (!ctx) return

  const notes = [523.25, 659.25, 783.99, 1046.5] // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = "sine"
    const startTime = ctx.currentTime + idx * 0.08
    osc.frequency.setValueAtTime(freq, startTime)

    gain.gain.setValueAtTime(0.09, startTime)
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(startTime)
    osc.stop(startTime + 0.2)
  })
}

export function playGameOverSound(): void {
  if (getIsAudioMuted()) return
  const ctx = getAudioContext()
  if (!ctx) return

  const notes = [392.0, 311.13] // G4, Eb4
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = "sine"
    const startTime = ctx.currentTime + idx * 0.12
    osc.frequency.setValueAtTime(freq, startTime)

    gain.gain.setValueAtTime(0.07, startTime)
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(startTime)
    osc.stop(startTime + 0.22)
  })
}
