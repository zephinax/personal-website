import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type IProps = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export const QRTooltip = ({ children, content }: IProps) => {
  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent>{content}</TooltipContent>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
