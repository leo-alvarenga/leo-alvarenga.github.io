import { useTranslation } from "react-i18next";

import ContentItem, { ContentItemInfo } from "./ContentItem";

export interface TableOfContentsProps {
  contents: ContentItemInfo[];
}

function TableOfContents({ contents }: TableOfContentsProps) {
  const { t } = useTranslation();

  return (
    <div
      className="
        max-xl:hidden
        fixed
        top-8 left-3
        bg-black1
        p-4 rounded-lg
        min-w-[10rem]
      "
    >
      <h2 className="text-xl mb-2">{t("shared.contents.title")}</h2>
      <ul className="flex flex-col">
        {contents.map((c) => (
          <ContentItem {...c} />
        ))}
      </ul>
    </div>
  );
}

export * from "./ContentItem";
export default TableOfContents;
