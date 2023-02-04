import { useTranslation } from "react-i18next";
import PS from "./PS";

function ShellPS1() {
  const { t } = useTranslation();

  return (
    <span
      className={`
        fixed bottom-4 left-3 
        flex flex-col 
        p-4 rounded bg-background 
        border-2 border-black2 font-term 
        hover:-translate-y-1 hover:scale-105
        transition-all
      `}
    >
      <PS args="shared.shell.welcome.command" disableBliker />
      <span>{t("shared.shell.welcome.output")}</span>
      <PS />
    </span>
  );
}

export default ShellPS1;
