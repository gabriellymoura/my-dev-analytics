import { FC } from "react";

interface ItemProps {
  description: string;
  date: string;
}

const Item: FC<ItemProps> = ({ date, description }) => {
  return (
    <div className="flex flex-row flex-wrap font-bold text-xs md:text-base">
      <p className="w-[30%] md:w-[10%] text-secondary-accent">
        {new Date(date).toLocaleDateString()}
      </p>
      <p>{description}</p>
    </div>
  );
};

interface Props {
  historyData: {
    description: string;
    date: string;
  }[];
}

const History: FC<Props> = ({ historyData }) => {
  return (
    <div className="flex flex-col p-5 gap-5 bg-card-bg rounded-2xl h-auto w-[80%] md:w-[60%]">
      <p className="text-base font-bold md:text-2xl">Recent Learnings</p>
      {historyData.slice(0, 5).map((item, index) => (
        <Item key={index} date={item.date} description={item.description} />
      ))}
    </div>
  );
};

export default History;
