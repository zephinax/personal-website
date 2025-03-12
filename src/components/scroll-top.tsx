"use client";

import { ChevronUpIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function ScrollTop({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= 400);
  });

  return (
    <AnimatePresence>
      {visible && (
        <Button
          key="scroll-top"
          className={cn(
            "fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] z-50 size-10 lg:right-8 lg:bottom-[calc(2rem+env(safe-area-inset-bottom,0px))]",
            className
          )}
          size="icon"
          asChild
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          {...props}
        >
          <motion.button
            initial={{ opacity: 0, translateY: 16 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ translateY: 16, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ChevronUpIcon className="size-6" />
          </motion.button>
        </Button>
      )}
    </AnimatePresence>
  );
}
