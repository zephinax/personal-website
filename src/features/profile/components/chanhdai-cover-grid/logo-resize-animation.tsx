"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { ChanhDaiWordmark } from "@/components/brand/chanhdai-wordmark";

type IProps = {
  minWidth?: number;
  maxWidth?: number;
};

export const LogoResizeAnimation = ({
  minWidth = 128,
  maxWidth = 160,
}: IProps) => {
  const [width, setWidth] = useState(maxWidth);

  return (
    <motion.div
      className="relative"
      initial={{ width: maxWidth }}
      whileInView={{ width: [maxWidth, minWidth, maxWidth] }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      onUpdate={(latest) => {
        setWidth(latest.width as number);
      }}
    >
      <div className="*:bg-background absolute -top-px -right-px -bottom-px -left-px border border-blue-500 *:absolute *:size-[9px] *:border *:border-blue-500 dark:border-zinc-600 dark:*:border-zinc-600">
        <div className="-top-[5px] -left-[5px]" />
        <div className="-top-[5px] -right-[5px]" />
        <div className="-bottom-[5px] -left-[5px]" />
        <div className="-right-[5px] -bottom-[5px]" />
      </div>

      <div className="absolute -top-[9px] left-1/2 -translate-x-1/2 -translate-y-full transform rounded-sm bg-blue-600 px-1 text-sm whitespace-nowrap text-white dark:bg-zinc-600">
        {Math.round(width)} x {Math.round(width / 2)}
      </div>

      <ChanhDaiWordmark className="size-full text-black dark:text-white" />
    </motion.div>
  );
};
