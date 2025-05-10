"use client";

import { Button } from "@/components/ui/button";
import { USER } from "@/data/user";
import { useIsClient } from "@/hooks/use-is-client";
import { decodeEmail } from "@/utils/string";

import { NavDropdown } from "./nav/nav-dropdown";

export function QuickActions() {
  const isClient = useIsClient();

  return (
    <>
      <div className="h-14" />

      <div className="fixed inset-x-0 bottom-0 z-50 bg-background pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))]">
        <div className="screen-line-before before:z-1">
          <div className="mx-auto px-4 md:max-w-3xl">
            <div className="border-x border-edge pt-2">
              <div className="screen-line-before screen-line-after -mx-px flex justify-center gap-2 sm:grid sm:grid-cols-2 sm:gap-4">
                <Button className="sm:hidden" size="icon:lg" asChild>
                  <a href="/vcard" target="_blank" rel="noopener noreferrer">
                    <UserCirclePlusIcon className="size-5" />
                    <span className="sr-only">Save vCard</span>
                  </a>
                </Button>

                <Button className="hidden sm:flex" size="lg" asChild>
                  <a href="/vcard" target="_blank" rel="noopener noreferrer">
                    <UserCirclePlusIcon />
                    Save vCard
                  </a>
                </Button>

                <Button size="lg" asChild>
                  <a
                    href={isClient ? `mailto:${decodeEmail(USER.email)}` : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PaperPlaneTiltIcon />
                    Send Email
                  </a>
                </Button>

                <NavDropdown className="sm:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function UserCirclePlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm48-12h16V80a8,8,0,0,0,16,0V64h16a8,8,0,0,0,0-16H208V32a8,8,0,0,0-16,0V48H176a8,8,0,0,0,0,16Zm45.35,40.11a8,8,0,0,0-6.57,9.21A88.85,88.85,0,0,1,216,128a87.62,87.62,0,0,1-22.24,58.41A79.86,79.86,0,0,0,172,165.1a4,4,0,0,0-4.84.32,59.81,59.81,0,0,1-78.27,0A4,4,0,0,0,84,165.1a79.71,79.71,0,0,0-21.79,21.31A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.92,103.92,0,1,0,85.24,85.24A8,8,0,0,0,221.35,104.11Z"></path>
    </svg>
  );
}

function PaperPlaneTiltIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M231.4,44.34s0,.1,0,.15l-58.2,191.94a15.88,15.88,0,0,1-14,11.51q-.69.06-1.38.06a15.86,15.86,0,0,1-14.42-9.15L107,164.15a4,4,0,0,1,.77-4.58l57.92-57.92a8,8,0,0,0-11.31-11.31L96.43,148.26a4,4,0,0,1-4.58.77L17.08,112.64a16,16,0,0,1,2.49-29.8l191.94-58.2.15,0A16,16,0,0,1,231.4,44.34Z"></path>
    </svg>
  );
}
