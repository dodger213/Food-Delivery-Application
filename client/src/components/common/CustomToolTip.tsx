import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  type ToolTipProps = {
    children: React.ReactNode;
    title: string;
  };
  
  export default function CustomToolTip({ children, title }: ToolTipProps) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  