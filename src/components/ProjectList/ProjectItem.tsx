import { useTranslation } from "react-i18next";
import { Tooltip } from "..";
import { skills } from "../../static/skills";

export interface ProjectItemProps {
  name: string;
  description: string;
  repo: string;
  stack: string[];
}

function ProjectItem({ name, description, repo, stack }: ProjectItemProps) {
  const { t } = useTranslation();

  return (
    <li
      key={name}
      className="w-full drop-shadow-lg bg-background rounded-lg hover:bg-black1 hover:translate-y-1 hover:scale-110 transition"
    >
      <a
        href={repo}
        target="_blank"
        className="flex flex-col items-start gap-3 p-4 w-full h-full"
      >
        <h3 className="text-lg">{t(name)}</h3>
        <p>{t(description)}</p>

        <ul className="flex flex-row list-none gap-1">
          {stack.map((tech) => {
            const item = skills.find(
              (s) => s.name.toLocaleLowerCase() === tech
            );

            if (!item) return null;

            return (
              <li>
                <Tooltip content={item.name}>
                  <img
                    className="w-8 hover:scale-110 transition-all"
                    src={item.icon}
                    alt={item.name}
                  />
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </a>
    </li>
  );
}

export default ProjectItem;
