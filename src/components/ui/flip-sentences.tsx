"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type IProps = {
  className?: string;
  sentences: string[];
};

export const FlipSentences = ({ className, sentences }: IProps) => {
  const [currentSentence, setCurrentSentence] = useState(0);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 2500);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState !== "visible" && intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
      intervalRef.current = null;
    } else if (document.visibilityState === "visible") {
      startAnimation(); // Restart the interval when the tab becomes visible
    }
  };

  useEffect(() => {
    startAnimation();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentences]);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={`current-sentence-${currentSentence}`}
        initial={{
          y: 8,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -8,
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className={cn(
          "text-muted-foreground font-mono text-sm text-balance",
          className
        )}
      >
        {sentences[currentSentence]}
      </motion.p>
    </AnimatePresence>
  );
};
