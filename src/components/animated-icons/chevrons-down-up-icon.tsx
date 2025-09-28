"use client";

import { motion, useAnimation } from "motion/react";
import { forwardRef, useImperativeHandle } from "react";

export type ChevronsDownUpIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

export type ChevronsDownUpIconProps = React.ComponentProps<"svg">;

const ChevronsDownUpIcon = forwardRef<
  ChevronsDownUpIconHandle,
  ChevronsDownUpIconProps
>((props, ref) => {
  const controls = useAnimation();

  useImperativeHandle(ref, () => {
    return {
      startAnimation: () => controls.start("animate"),
      stopAnimation: () => controls.start("normal"),
    };
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <motion.path
        d="M7 15L12 20L17 15"
        variants={{
          normal: {
            d: "M7 15L12 20L17 15",
          },
          animate: {
            d: "M7 20L12 15L17 20",
          },
        }}
        transition={{
          duration: 0.3,
        }}
        initial="normal"
        animate={controls}
      />
      <motion.path
        d="M7 9L12 4L17 9"
        variants={{
          normal: {
            d: "M7 9L12 4L17 9",
          },
          animate: {
            d: "M7 4L12 9L17 4",
          },
        }}
        transition={{
          duration: 0.3,
        }}
        animate={controls}
      />
    </svg>
  );
});

ChevronsDownUpIcon.displayName = "ChevronsDownUpIcon";

export { ChevronsDownUpIcon };
