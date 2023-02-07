import { useTranslation } from "react-i18next";

export interface ContentItemInfo {
  label: string;
  icon?: string;
  id: string;
}

function ContentItem({ label, icon, id }: ContentItemInfo) {
  const { t } = useTranslation();

  return (
    <li className="px-2 py-1 rounded-lg hover:scale-110 hover:bg-background transition-all">
      <a
        className="flex flex-row gap-2 items-center w-full h-full"
        href={`#${id}`}
      >
        {icon && <img width={20} src={icon} alt={id} />}
        <span>{t(label)}</span>
      </a>
    </li>
  );
}

export default ContentItem;
