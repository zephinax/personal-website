"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

type IProps = {
  dateOfBirth: string;
};

export const HappyBirthday = ({ dateOfBirth }: IProps) => {
  const [isMounted, setIsMounted] = useState(false);

  const { width, height } = useWindowSize();

  const today = dayjs().format("MM-DD");
  const shouldShow = today === dayjs(dateOfBirth).format("MM-DD");

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
};
