"use client";

import { RepeatIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useState } from "react";

import { ChanhDaiWordmark } from "@/components/brand/chanhdai-wordmark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { HelloEnglish } from "@/registry/hello-english";
import { HelloVietnamese } from "@/registry/hello-vietnamese";
import { SimpleTooltip } from "@/registry/simple-tooltip";

const layers = ["hello-vietnamese", "hello-english", "chanhdai-wordmark"];

export function Hello() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const startAnimation = useCallback(() => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % layers.length);
    }, 500);
  }, []);

  return (
    <>
      <div
        className={cn(
          "top-1/2 box-content h-16 w-full -translate-y-1/2 border-y border-grid transition-all duration-500 sm:h-20",
          {
            "h-10 sm:h-16": ["hello-vietnamese", "hello-english"].includes(
              layers[currentIndex]
            ),
          }
        )}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={`layer-${currentIndex}`}
          className="flex items-center justify-center text-black dark:text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-full border-r border-grid"
            layoutId="layout-grid-left"
            transition={{
              duration: 0.5,
            }}
          />

          {layers[currentIndex] === "hello-vietnamese" && (
            <HelloVietnamese
              className="h-10 sm:h-16"
              onAnimationComplete={startAnimation}
            />
          )}

          {layers[currentIndex] === "hello-english" && (
            <HelloEnglish
              className="h-10 sm:h-16"
              onAnimationComplete={startAnimation}
            />
          )}

          {layers[currentIndex] === "chanhdai-wordmark" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ChanhDaiWordmark className="h-16 sm:h-20" />
            </motion.div>
          )}

          <motion.div
            className="h-full border-r border-grid"
            layoutId="layout-grid-right"
            transition={{
              duration: 0.5,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-end justify-end">
        <SimpleTooltip content="Restart animation">
          <Button
            className="relative -right-px -bottom-px z-10"
            variant="outline"
            size="icon"
            onClick={() => {
              setCurrentIndex(0);
            }}
          >
            <RepeatIcon />
          </Button>
        </SimpleTooltip>
      </div>
    </>
  );
}
