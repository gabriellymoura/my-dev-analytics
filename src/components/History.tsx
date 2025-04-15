import { FC } from "react";

interface ItemProps {
  description: string;
  date: string;
}

const Item: FC<ItemProps> = ({ date, description }) => {
  return (
    <div className="flex flex-row flex-wrap font-bold text-primary">
      <p className="w-[30%]">{new Date(date).toLocaleDateString()}</p>
      <p className="">{description}</p>
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
    <div className="flex flex-col p-5 gap-10 bg-secondary-card text-black rounded-2xl h-auto w-[80%]">
      {historyData.map((item, index) => (
        <Item key={index} date={item.date} description={item.description} />
      ))}
    </div>
  );
};

export default History;
