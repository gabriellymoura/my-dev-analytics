import { FC, useEffect, useState } from "react";
import { HistoryData } from "../types";
import { getFromAPI } from "../utils";

interface ItemProps {
  description: HistoryData["description"];
  date: HistoryData["date"];
}

const Item: FC<ItemProps> = ({ date, description }) => {
  return (
    <div className="flex flex-row flex-wrap font-bold text-xs md:text-base">
      <p className="w-[30%] md:w-[15%] text-secondary-accent">
        {new Date(date).toLocaleDateString()}
      </p>
      <p>{description}</p>
    </div>
  );
};

const History: FC = () => {
  const [history, setHistory] = useState<HistoryData[]>([]);

  useEffect(() => {
    getFromAPI("/history", setHistory);
  }, []);

  return (
    <div className="flex flex-col p-5 gap-5 bg-card-bg rounded-2xl h-auto w-[80%] md:w-[60%]">
      <p className="text-base font-bold md:text-2xl">Recent Learnings</p>
      {history.slice(0, 5).map((item, index) => (
        <Item key={index} date={item.date} description={item.description} />
      ))}
    </div>
  );
};

export default History;
