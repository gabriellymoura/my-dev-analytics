import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex flex-col text-center border border-black pt-10 pb-10">
      <p className="text-3xl">
        <span className="text-red-800">Gabrielly Moura</span> – Frontend
        Software Engineer.
      </p>
      <p>
        Experiência em Flutter, React Native, SDK Design, Monorepos e Telemetria
        (RUM).
      </p>
      <p>
        Ex: Checkout da Americanas S.A, soluções em Cloud e Observabilidade.
      </p>
    </div>
  );
};

export default Header;
