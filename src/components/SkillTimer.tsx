import { FC, useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  XAxisProps,
} from "recharts";
import { getFromAPI } from "../utils";
import { SkillTimerData } from "../types";

const axisStyles: XAxisProps = {
  stroke: "var(--color-primary-text)",
  tickLine: false,
};
const barStyle = {
  fill: "var(--color-progress-bar)",
  radius: [10, 10, 0, 0] as [number, number, number, number],
  barSize: 50,
};

const valueStyles = {
  fill: "var(--color-primary-text)",
};

const SkillTimer: FC = () => {
  const [skills, setSkills] = useState<SkillTimerData[]>([]);

  useEffect(() => {
    getFromAPI("/skills", setSkills);
  }, []);

  return (
    <div className="w-full min-h-70 max-h-full flex flex-col justify-between p-4 rounded-2xl font-bold text-xs md:text-base bg-card-bg text-primary-text">
      <p className="text-base font-bold md:text-2xl">Tempo por Área</p>
      <ResponsiveContainer>
        <BarChart data={skills}>
          <XAxis dataKey="activity" {...axisStyles} />
          <Bar dataKey="time" {...barStyle}>
            <LabelList
              dataKey="time"
              position="centerBottom"
              {...valueStyles}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillTimer;
