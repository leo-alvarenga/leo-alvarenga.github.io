import { useMemo } from "react";

export interface LangButtonProps {
  value: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

function LangButton({ value, selected, onClick }: LangButtonProps) {
  const label = useMemo(
    () => value.toLocaleLowerCase().replace(/[-]/gm, " "),
    [value]
  );

  const className = useMemo(() => {
    let base =
      "px-2 py-1 text-background hover:-translate-y-1 hover:scale-110 transition-all ";

    if (selected) return base.concat("bg-green1 hover:bg-green1 active:green1");

    return base.concat("bg-green2 hover:bg-green1 active:bg-green1");
  }, [selected]);

  return (
    <button className={className} onClick={() => onClick(value)}>
      {label}
    </button>
  );
}

export default LangButton;
