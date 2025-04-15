import { FC } from "react";

const Header: FC = () => {
  return (
    <div className="flex flex-col text-center pt-10 pb-10">
      <p className="text-4xl font-display">
        <span className="text-primary-accent font-bold">Gabrielly Moura</span> –
        Frontend Software Engineer.
      </p>
      <p className="">
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
