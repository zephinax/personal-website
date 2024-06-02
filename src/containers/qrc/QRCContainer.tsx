"use client";

import dayjs from "dayjs";
import { CopyIcon, DownloadIcon } from "lucide-react";
import QRC from "qrcode";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { SwitchTheme } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { QRCLogo } from "./components";

export const QRCContainer = () => {
  const [text, setText] = useState("qrc.io.vn");

  const canvasRef = useRef<HTMLDivElement>(null);
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );

  useEffect(() => {
    if (!text) {
      return;
    }

    QRC.toCanvas(text, {
      width: 1024,
      margin: 1,
    })
      .then((canvas) => {
        canvas.style.width = "100%";
        canvas.style.height = "auto";

        canvasRef.current?.replaceChildren(canvas);
        setCanvasElement(canvas);
      })
      .catch((error) => {
        toast.error("Đã xảy ra lỗi: ", error.message);
      });
  }, [text]);

  const handleCopy = () => {
    canvasElement?.toBlob((blob) => {
      if (!blob) {
        toast.error("Không thể sao chép mã QR. Vui lòng thử lại.");
        return;
      }

      navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);

      toast.success("Đã sao chép mã QR");
    });
  };

  const handleDownload = () => {
    canvasElement?.toBlob((blob) => {
      if (!blob) {
        toast.error("Không thể tải mã QR. Vui lòng thử lại.");
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `qrc.io.vn ${dayjs().format("YYMMDDHHmmss")}.png`;
      a.click();

      toast.success("Đã tải mã QR");
    });
  };

  return (
    <div className="container">
      <div className="mx-auto max-w-lg space-y-8 py-8">
        <header className="flex flex-col items-center space-y-4">
          <QRCLogo className="mx-auto text-blue-600 dark:text-blue-500" />

          <div className="font-medium text-blue-600 dark:text-blue-500">
            Công cụ tạo mã QR dễ dàng và tin cậy
          </div>
        </header>

        <main className="space-y-4">
          <div>
            <label
              htmlFor="qrc-text"
              className="mb-1 block text-sm font-medium"
            >
              Nội dung mã QR
            </label>

            <Input
              id="qrc-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://qrc.io.vn"
            />
          </div>

          <div className="mx-auto w-64 space-y-4">
            <div
              ref={canvasRef}
              className="aspect-1 max-w-full overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-transparent"
            />

            <div className="grid grid-cols-1 gap-2">
              <Button onClick={handleDownload}>
                <DownloadIcon size={16} className="mr-1" />
                Tải về
              </Button>

              <Button variant="secondary" onClick={handleCopy}>
                <CopyIcon size={16} className="mr-1" />
                Sao chép
              </Button>
            </div>
          </div>
        </main>

        <footer className="space-y-4">
          <div className="select-none text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} QRC.io.vn - Thiết kế & Phát triển bởi{" "}
            <a
              className="text-slate-900 dark:text-white"
              href="https://quaric.com"
              target="_blank"
              rel="noreferrer"
            >
              Quaric
            </a>
          </div>

          <div className="flex justify-center">
            <SwitchTheme />
          </div>
        </footer>
      </div>
    </div>
  );
};
