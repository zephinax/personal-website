"use client";

import dayjs from "dayjs";
import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";

type IProps = {
  dateOfBirth: string;
};

export const HappyBirthday = ({ dateOfBirth }: IProps) => {
  const { width, height } = useWindowSize();

  const today = dayjs().format("MM-DD");
  const shouldShow = today === dayjs(dateOfBirth).format("MM-DD");

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
