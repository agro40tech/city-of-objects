import { FC } from "react";

import "./style.css";
import { ElementMoney } from "04-Entities";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">City Of Objects</h1>

      <ElementMoney />
    </header>
  );
};
