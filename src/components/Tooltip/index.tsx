import { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

export interface TooltipProps {
  content: string | ReactNode;
  children: ReactNode;
  placement?: "top" | "bottom";
  background?: string;
  disableArrow?: boolean;
}

function Tooltip({
  content,
  children,
  placement = "top",
  background = "background",
  disableArrow,
}: TooltipProps) {
  const { t } = useTranslation();

  const className = useMemo(() => {
    let base = `
      absolute pointer-events-none 
      whitespace-nowrap rounded 
      bg-${background} text-foreground 
      px-2 py-1 transition -translate-x-1/2 
      opacity-0 group-hover:opacity-100 `;

    const baseArrow = `before:absolute before:left-1/2 
      before:border-4 before:border-transparent 
      before:content-[''] `;

    switch (placement) {
      case "top":
        base = base.concat("-top-10 left-1/2 ");

        if (disableArrow) return base;
        return base.concat(
          baseArrow,
          `before:-translate-x-1/2 before:border-t-${background} before:top-full`
        );
      case "bottom":
        base = base.concat("-bottom-10 left-1/2 ");

        if (disableArrow) return base;
        return base.concat(
          baseArrow,
          `before:-translate-x-1/2 before:border-b-${background} before:bottom-full`
        );
    }
  }, []);

  return (
    <div className="group relative">
      <span className={className}>
        {typeof content === "string" ? t(content) : content}
      </span>

      {children}
    </div>
  );
}

export default Tooltip;
