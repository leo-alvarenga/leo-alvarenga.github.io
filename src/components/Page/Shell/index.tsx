import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PS from "./PS";

function ShellPS1() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(true);

  // small trick to ensure the icon loads on the initial load
  const termIcon = useMemo(
    () => (
      <img src="https://sw.kovidgoyal.net/kitty/_static/kitty.svg" alt="term" />
    ),
    []
  );

  return visible ? (
    <span
      className={`
        fixed bottom-4 left-3 
        flex flex-col 
        p-4 rounded bg-background 
        border-2 border-black2 font-term 
        hover:-translate-y-1 hover:scale-105
        transition-all
        z-50
      `}
    >
      <PS args="shared.shell.welcome.command" disableBliker />
      <span>{t("shared.shell.welcome.output")}</span>
      <PS
        args={
          <span
            className="hover:text-blue1 hover:cursor-pointer transition-all"
            onClick={() => setVisible(false)}
          >
            {t("shared.shell.exit.command")}
          </span>
        }
      />
    </span>
  ) : (
    <span
      className={`
          fixed bottom-4 left-3
          max-xl:bottom-1 max-xl:left-1
          w-24 h-24 z-50
          flex flex-col 
          items-center justify-center
          active:border-2 active:border-black2 font-term
          hover:-translate-y-1 hover:scale-105
          hover:cursor-pointer transition-all
        `}
      onClick={() => setVisible(true)}
    >
      {termIcon}
    </span>
  );
}

export default ShellPS1;
