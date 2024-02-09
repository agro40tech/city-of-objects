import { FC } from "react";

import "./style.css";
import { Mony } from "05-Shared";

export const Header: FC = () => {
  const countMony: number = 10;

  return (
    <header className="header">
      <h1 className="header__logo">City Of Objects</h1>

      <ul className="header__menu-list">
        <li className="header__menu-item">
          <Mony propsCountMony={countMony} propsClassName="header__count-mony" />
        </li>
        <li className="header__menu-item">
          <span className="item__mony-peer-second">МВС: 35</span>
        </li>
      </ul>
    </header>
  );
};
