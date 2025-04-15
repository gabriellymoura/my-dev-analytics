import { FC } from "react";

const Skill: FC = () => {
  return (
    <div className="flex flex-row justify-between font-bold ">
      <p>React</p>
      <p>70%</p>
    </div>
  );
};

const SkillTracker: FC = () => {
  return (
    <div className="w-full h-auto flex flex-col text-primary bg-secondary rounded-2xl p-4 gap-3">
      <Skill />
      <Skill />
      <Skill />
      <Skill />
    </div>
  );
};

export default SkillTracker;
