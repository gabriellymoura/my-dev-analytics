import { FC } from "react";

const Foorter: FC = () => {
  return (
    <div className="w-full h-auto flex flex-row justify-center items-center font-bold text-2xl gap-5">
      <a href="https://github.com/gabriellymoura" target="_blank">
        Github
      </a>
      <p className="text-6xl">.</p>
      <a href="https://www.linkedin.com/in/gabrielly-moura/" target="_blank">
        LinkedIn
      </a>
    </div>
  );
};

export default Foorter;
