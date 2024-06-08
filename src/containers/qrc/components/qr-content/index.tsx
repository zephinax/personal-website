import clsx from "clsx";
import dayjs from "dayjs";
import { CopyIcon, DownloadIcon } from "lucide-react";
import QRC from "qrcode";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useAppDispatch, useAppSelector } from "../../redux";
import { selectIsTyping, selectText, setIsTyping } from "../../redux/qrcSlice";

export const QRContent = () => {
  const text = useAppSelector(selectText);
  const isTyping = useAppSelector(selectIsTyping);
  const dispatch = useAppDispatch();

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

        dispatch(setIsTyping(false));
      })
      .catch((error) => {
        toast.error("Đã xảy ra lỗi: ", error.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div
      className={clsx("mx-auto w-64 space-y-4", {
        "pointer-events-none opacity-25": isTyping,
      })}
    >
      <div
        ref={canvasRef}
        className="aspect-1 max-w-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
      />

      <div className="grid grid-cols-1 gap-2">
        <Button onClick={handleDownload}>
          <DownloadIcon size={16} className="mr-1" />
          Tải về
        </Button>

        <Button
          className="dark:bg-slate-700 hover:dark:bg-slate-600/90"
          variant="secondary"
          onClick={handleCopy}
        >
          <CopyIcon size={16} className="mr-1" />
          Sao chép
        </Button>
      </div>
    </div>
  );
};
