import { FC, useEffect, useState } from "react";
import { TechTrackerData } from "../types";
import { getFromAPI } from "../utils";

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

interface TechProps {
  name: string;
  level: string;
  progress: number;
}

const Tech: FC<TechProps> = ({ name, progress }) => {
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

const TechTracker: FC = () => {
  const [techTracker, setTechTracker] = useState<TechTrackerData[]>([]);

  useEffect(() => {
    getFromAPI("/tech", setTechTracker);
  }, []);

  return (
    <div className="w-full h-auto flex flex-col text-primary bg-card-bg rounded-2xl p-4 gap-3">
      <p className="text-base font-bold md:text-2xl">Skill Tracker</p>

      {techTracker.map((item, index) => (
        <Tech
          key={index}
          level={item.level}
          name={item.name}
          progress={item.progress}
        />
      ))}
    </div>
  );
};

export default TechTracker;
