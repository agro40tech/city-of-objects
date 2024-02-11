import { FC } from "react";

import { ElementMoney } from "04-Entities";

import "./style.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">City Of Objects</h1>

      <ElementMoney />
    </header>
  );
};
