"use client";

import qrcode from "qrcode";
import { useEffect, useRef } from "react";

export const QRC = () => {
  const text =
    "00020101021138540010A00000072701240006970422011099999991480208QRIBFTTA53037045802VN63047b49";

  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    qrcode
      .toCanvas(text, {
        width: 256,
        margin: 1,
      })
      .then((canvas) => {
        canvas.style.width = "100%";
        canvas.style.height = "auto";
        canvasRef.current?.replaceChildren(canvas);
      });
  }, [text]);

  return (
    <div
      ref={canvasRef}
      className="aspect-1 max-w-full overflow-hidden rounded-md border border-slate-200"
    />
  );
};
