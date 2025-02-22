"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

export function Confetti({
  datesWithoutYear = [],
  datesWithYear = [],
}: {
  datesWithoutYear?: string[];
  datesWithYear?: string[];
}) {
  const [isMounted, setIsMounted] = useState(false);

  const { width, height } = useWindowSize();

  const todayWithoutYear = dayjs().format("MM-DD");
  const todayWithYear = dayjs().format("YYYY-MM-DD");
  const shouldShow =
    datesWithoutYear.some(
      (date) => dayjs(date).format("MM-DD") === todayWithoutYear
    ) ||
    datesWithYear.some(
      (date) => dayjs(date).format("YYYY-MM-DD") === todayWithYear
    );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!shouldShow) {
    return null;
  }

  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      style={{ position: "fixed", zIndex: 9999 }}
    />
  );
}
