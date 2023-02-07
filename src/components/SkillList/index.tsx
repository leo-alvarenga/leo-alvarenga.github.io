import { skills } from "../../static/skills";
import Tooltip from "../Tooltip";
import SkillItem from "./SkillItem";

function SkillList() {
  return (
    <ul
      id="skills"
      className={`
        bg-black1
        flex flex-row gap-4
        flex-wrap justify-between 
        list-none rounded-lg p-2
        w-[70%] max-xl:w-full
        drop-shadow-lg 
      `}
    >
      {skills.map((s) => (
        <SkillItem {...s} />
      ))}
    </ul>
  );
}

export default SkillList;
