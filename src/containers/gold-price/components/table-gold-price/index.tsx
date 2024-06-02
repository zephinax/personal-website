"use client";

import dayjs from "dayjs";

import {
  IconVSBulkCalculator,
  IconVSBulkCalendar,
  IconVSBulkLinkCircle,
} from "@/components/icons/vuesax/bulk";
import { SwitchTheme } from "@/components/layout";
import { Spin } from "@/components/ui/loading/Spin";
import { currencyFormat } from "@/utils/number";

import { useGoldPrice } from "../../hooks";
import { GoldBrand } from "../../types";

type TableProps = {
  brand: GoldBrand;
};

export const TableGoldPrice = ({ brand }: TableProps) => {
  const { data, isLoading } = useGoldPrice({ brand });

  if (isLoading) {
    return (
      <div aria-label="Đang tải dữ liệu ...">
        <Spin />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-xl border border-red-400 p-4 text-red-400">
        Không thể tải dữ liệu. Vui lòng thử lại sau.
      </div>
    );
  }

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        <h1 className="text-lg font-semibold uppercase text-yellow-600 dark:text-yellow-400">
          {data.meta.brand.name} - {data.meta.brand.shortName}
        </h1>

        <div className="flex items-center">
          <i aria-label="Đơn vị tính">
            <IconVSBulkCalculator className="text-slate-400" size={20} />
          </i>
          &nbsp;
          <div className="flex-1">{data.meta.unit}</div>
        </div>

        <div className="flex items-center">
          <i aria-label="Thời gian cập nhật">
            <IconVSBulkCalendar className="text-slate-400" size={20} />
          </i>
          &nbsp;
          <div className="flex-1">
            {dayjs(data.meta.updatedAt).format("DD/MM/YYYY hh:mm A")}
          </div>
        </div>

        <div className="flex items-center">
          <i aria-label="Nguồn">
            <IconVSBulkLinkCircle className="text-slate-400" size={20} />
          </i>
          &nbsp;
          <div className="flex-1">Nguồn: {data.meta.source}</div>
        </div>
      </div>

      <div className="mb-4 divide-y divide-slate-200 rounded-xl border border-slate-200 dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
        {data.data.map((item, index) => {
          return (
            <div key={index} className="space-y-2 px-4 py-4">
              <h2
                className="font-semibold text-yellow-700 dark:text-yellow-200"
                dangerouslySetInnerHTML={{ __html: item.type }}
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Giá mua
                  </div>
                  <div className="text-lg font-medium">
                    {currencyFormat(item.buy, { currency: "VND" })}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Giá bán
                  </div>
                  <div className="text-lg font-medium">
                    {currencyFormat(item.sell, { currency: "VND" })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="mb-4 space-y-2">
        <div className="text-center text-sm text-slate-500 dark:text-slate-400 sm:text-left">
          © {new Date().getFullYear()} Vang.io.vn - Thiết kế & Phát triển bởi{" "}
          <a
            className="text-slate-900 dark:text-slate-50"
            href="https://quaric.com"
            target="_blank"
            rel="noreferrer"
          >
            Quaric
          </a>
        </div>

        <div className="flex">
          <SwitchTheme />
        </div>
      </footer>
    </>
  );
};
