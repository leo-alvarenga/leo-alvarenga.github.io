import { useTranslation } from "react-i18next";
import { Tooltip } from "..";
import { projects } from "../../static/projects";
import { skills } from "../../static/skills";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const { t } = useTranslation();

  return (
    <>
      <span
        id="projects"
        className="w-[80%] max-xl:w-full pt-4 border-t-2 border-background text-center text-2xl"
      >
        {t("shared.projects.title")}
      </span>
      <ul className="w-[70%] max-xl:w-full flex flex-col gap-4 items-center list-none">
        {projects.map((p) => (
          <ProjectItem {...p} />
        ))}
      </ul>
      <a
        className="bg-background rounded-lg py-1 px-2 inline-flex items-center gap-4 transition-all hover:scale-110 hover:cursor-pointer"
        href="https://github.com/leo-alvarenga"
        target="_blank"
      >
        {t("shared.projects.seeMore")}

        <img
          width={40}
          className="svg-foreground"
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
          alt="github:leo-alvarenga"
        />
      </a>
    </>
  );
}

export default ProjectList;
