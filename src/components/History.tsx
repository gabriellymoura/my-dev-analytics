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
    <div className="flex flex-col border  pt-5 pb-5 border-black gap-2">
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default History;
