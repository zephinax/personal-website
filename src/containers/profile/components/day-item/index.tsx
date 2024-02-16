"use client";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { IconVSBulkCalendar } from "@/components/icons/vuesax/bulk";

import { IntroItem } from "../intro-item";

dayjs.extend(localizedFormat);

export const DayItem = () => {
  return (
    <IntroItem
      icon={<IconVSBulkCalendar size={24} />}
      content={dayjs().format("LLLL")}
    />
  );
};
