import { FC } from "react";

import { ElementMoney } from "04-Entities";

import { classNameHeader, classNameHeaderLogo } from "./lib";
import "./style.css";

export const Header: FC = () => {
  return (
    <header className={classNameHeader}>
      <h1 className={classNameHeaderLogo}>City Of Objects</h1>

      <ElementMoney />
    </header>
  );
};
