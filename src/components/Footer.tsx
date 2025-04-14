import { FC } from "react";

const Foorter: FC = () => {
  return (
    <div className="w-full h-auto flex flex-row justify-center items-center font-bold text-2xl gap-5">
      <a>Github</a>
      <p className="text-6xl">.</p>
      <a>LinkedIn</a>
    </div>
  );
};

export default Foorter;
