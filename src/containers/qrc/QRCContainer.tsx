"use client";

import { Provider } from "react-redux";

import { SwitchTheme } from "@/components/layout";

import { Logo, QRContent, QRInput } from "./components";
import { store } from "./redux";

export const QRCContainer = () => {
  return (
    <Provider store={store}>
      <div className="mx-auto max-w-lg space-y-8 px-4 py-8">
        <header className="flex flex-col items-center space-y-4">
          <Logo className="mx-auto text-blue-600 dark:text-blue-500" />

          <div className="font-medium text-blue-600 dark:text-blue-500">
            Công cụ tạo Mã QR miễn phí
          </div>
        </header>

        <main className="space-y-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
          <div>
            <label
              className="mb-2 block text-sm font-medium"
              htmlFor="qrc-text"
            >
              Nội dung mã QR
            </label>

            <QRInput id="qrc-text" />
          </div>

          <QRContent />
        </main>

        <footer className="space-y-2">
          <div className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} QRC.io.vn. Made by{" "}
            <a
              className="text-slate-900 dark:text-slate-50"
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
    </Provider>
  );
};
