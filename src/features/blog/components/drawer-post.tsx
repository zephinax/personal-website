import dayjs from "dayjs";
import { ArrowLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Prose } from "@/components/ui/typography";
import { PostMetadata } from "@/types/blog";

import { Drawer, DrawerClose, DrawerDescription, DrawerTitle } from "./drawer";

export function DrawerPost({
  metadata: { title, description, createdAt },
  children,
}: {
  metadata: PostMetadata;
  children: React.ReactNode;
}) {
  return (
    <Drawer>
      <div className="isolate mx-auto px-4 md:max-w-3xl">
        <div className="min-h-[calc(var(--drawer-height)-1px)] border-x border-grid">
          <div className="pt-4 pb-2">
            <div className="mx-auto h-2 w-16 rounded-full bg-muted" />
          </div>

          <div className="screen-line-after">
            <DrawerClose asChild>
              <Button className="ml-2" variant="ghost" size="icon">
                <ArrowLeftIcon className="size-5" />
              </Button>
            </DrawerClose>
          </div>

          <div className="screen-line-after px-4 py-1">
            <time
              className="font-mono text-sm text-muted-foreground"
              dateTime={dayjs(createdAt).toISOString()}
            >
              {dayjs(createdAt).format("YYYY.MM.DD")}
            </time>
          </div>

          <Prose className="px-4 select-text">
            <div className="screen-line-after">
              <DrawerTitle asChild>
                <h1 className="mb-6 font-heading font-medium">{title}</h1>
              </DrawerTitle>
            </div>

            <div className="screen-line-before">
              <DrawerDescription className="lead mt-0 pt-1" asChild>
                <p>{description}</p>
              </DrawerDescription>
            </div>

            <div>{children}</div>
          </Prose>

          <div className="screen-line-before h-[calc(1rem+env(safe-area-inset-bottom,0px))] w-full" />
        </div>
      </div>
    </Drawer>
  );
}
