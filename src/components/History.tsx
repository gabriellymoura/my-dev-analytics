import { FC } from "react";

const Item: FC = () => {
  return (
    <div className="flex flex-row justify-around">
      <p>data</p>
      <p>frontend</p>
      <p>20</p>
    </div>
  );
};

const History: FC = () => {
  return (
    <div className="flex flex-col pt-5 pb-5 gap-2 bg-secondary-card text-black rounded-2xl">
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default History;
