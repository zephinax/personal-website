import { cn } from "@/lib/cn";

import { NavLink } from "./nav-link";

export function NavItem({
  active,
  ...props
}: React.ComponentProps<typeof NavLink> & {
  active?: boolean;
}) {
  return (
    <NavLink
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-all duration-300",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}
