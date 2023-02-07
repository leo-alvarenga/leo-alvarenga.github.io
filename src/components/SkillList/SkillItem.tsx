import { Tooltip } from "..";

export interface SkillItemProps {
  name: string;
  icon: string;
}

function SkillItem({ name, icon }: SkillItemProps) {
  return (
    <li key={name}>
      <Tooltip content={name}>
        <img
          className="w-12 hover:scale-105 transition-all"
          src={icon}
          alt={name}
        />
      </Tooltip>
    </li>
  );
}

export default SkillItem;
