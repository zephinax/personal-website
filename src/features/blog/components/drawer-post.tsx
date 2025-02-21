import dayjs from "dayjs";

import { Prose } from "@/features/blog/components/prose";

import { Drawer, DrawerDescription, DrawerTitle } from "./drawer";

type IProps = {
  title: string;
  description: string;
  createdAt: string;
  children: React.ReactNode;
};

export const DrawerPost = ({
  title,
  description,
  createdAt,
  children,
}: IProps) => {
  return (
    <Drawer>
      <div className="mx-auto px-4 md:max-w-3xl">
        <div className="border-grid min-h-[calc(var(--drawer-height)-1px)] border-x">
          <div className="pt-4 pb-2">
            <div className="bg-muted mx-auto h-2 w-16 rounded-full" />
          </div>

          <div className="long-line-after px-4">
            <time
              className="text-muted-foreground shrink-0 font-mono text-sm"
              dateTime={dayjs(createdAt).toISOString()}
            >
              {dayjs(createdAt).format("MMM DD, YYYY")}
            </time>
          </div>

          <Prose>
            <div className="long-line-after px-4">
              <DrawerTitle asChild>
                <h1>{title}</h1>
              </DrawerTitle>
            </div>

            <div className="long-line-before px-4">
              <DrawerDescription className="lead" asChild>
                <p>{description}</p>
              </DrawerDescription>
            </div>

            <div className="px-4">{children}</div>
          </Prose>

          <div className="long-line-before h-[calc(1rem+env(safe-area-inset-bottom,0px))] w-full" />
        </div>
      </div>
    </Drawer>
  );
};
