"use client";

import ReactTooltip from "rc-tooltip";

type TooltipPlacement =
  | "left"
  | "right"
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

type TooltipTrigger = "hover" | "click" | "focus";

type TooltipProps = {
  title: string | JSX.Element;
  placement?: TooltipPlacement;
  trigger?: TooltipTrigger[];
  children?: JSX.Element;
};

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = "top",
  trigger = ["hover"],
  children,
  ...restProps
}) => {
  if (!title) {
    return <>{children}</>;
  }

  return (
    <ReactTooltip
      placement={placement}
      trigger={trigger}
      overlay={<span>{title}</span>}
      mouseEnterDelay={0.1}
      mouseLeaveDelay={0.1}
      destroyTooltipOnHide
      {...restProps}
    >
      {children}
    </ReactTooltip>
  );
};
