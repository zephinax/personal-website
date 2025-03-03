import dayjs from "dayjs";

import { Typography } from "@/components/ui/typography";

import { PostMetadata } from "../types/posts";
import { Drawer, DrawerDescription, DrawerTitle } from "./drawer";

export function DrawerPost({
  metadata: { title, description, createdAt },
  children,
}: {
  metadata: PostMetadata;
  children: React.ReactNode;
}) {
  return (
    <Drawer>
      <div className="mx-auto px-4 md:max-w-3xl">
        <div className="min-h-[calc(var(--drawer-height)-1px)] border-x border-grid">
          <div className="pt-4 pb-2">
            <div className="mx-auto h-2 w-16 rounded-full bg-muted" />
          </div>

          <div className="long-line-after px-4">
            <time
              className="font-mono text-sm text-muted-foreground"
              dateTime={dayjs(createdAt).toISOString()}
            >
              {dayjs(createdAt).format("YYYY.MM.DD")}
            </time>
          </div>

          <Typography className="select-text">
            <div className="long-line-after px-4">
              <DrawerTitle asChild>
                <h1 className="font-heading font-semibold">{title}</h1>
              </DrawerTitle>
            </div>

            <div className="long-line-before px-4">
              <DrawerDescription className="lead" asChild>
                <p>{description}</p>
              </DrawerDescription>
            </div>

            <div className="px-4">{children}</div>
          </Typography>

          <div className="long-line-before h-[calc(1rem+env(safe-area-inset-bottom,0px))] w-full" />
        </div>
      </div>
    </Drawer>
  );
}
