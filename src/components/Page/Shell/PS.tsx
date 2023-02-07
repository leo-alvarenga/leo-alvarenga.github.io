import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export interface PSProps {
  args?: string | ReactNode;
  disableBliker?: boolean;
}

function PS({ args, disableBliker }: PSProps) {
  const { t } = useTranslation();

  return (
    <span className="text-green3">
      <span>{t("shared.shell.ps1")}</span>{" "}
      <span className="text-blue1">
        {t("shared.shell.ps2")}
        <span className="text-foreground">
          {args && typeof args === "string" ? ` ${t(args)}` : <> {args}</>}
        </span>
      </span>
      {!disableBliker && (
        <span className="text-foreground animate-blink">█</span>
      )}
    </span>
  );
}

export default PS;
