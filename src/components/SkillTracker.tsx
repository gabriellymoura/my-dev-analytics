import { FC } from "react";

interface ProgressProps {
  progress: number;
}

const Progress: FC<ProgressProps> = ({ progress }) => {
  return (
    <div className=" bg-gray-700/50 h-2 rounded-2xl md:h-5">
      <div
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
        className="w-[var(--progress)] bg-progress-bar h-2 rounded-2xl md:h-5"
      />
    </div>
  );
};

interface SkillProps {
  name: string;
  level: string;
  progress: number;
}

const Skill: FC<SkillProps> = ({ name, progress }) => {
  return (
    <div className="flex flex-col font-bold ">
      <div className="flex justify-between text-xs md:text-base">
        <p>{name}</p>
        <p>{progress}%</p>
      </div>
      <Progress progress={progress} />
    </div>
  );
};

interface Props {
  skillTrackerData: {
    name: string;
    level: string;
    progress: number;
  }[];
}

const SkillTracker: FC<Props> = ({ skillTrackerData }) => {
  return (
    <div className="w-full h-auto flex flex-col text-primary bg-card-bg rounded-2xl p-4 gap-3">
      <p className="text-base font-bold md:text-2xl">Skill Tracker</p>

      {skillTrackerData.map((item, index) => (
        <Skill
          key={index}
          level={item.level}
          name={item.name}
          progress={item.progress}
        />
      ))}
    </div>
  );
};

export default SkillTracker;
