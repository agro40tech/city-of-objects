import { FC } from "react";

import "./style.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="header__logo">City Of Objects</h1>

      <ul className="header__menu-list">
        <li className="header__menu-item">
          <span className="item__mony">Монет: 999</span>
        </li>
        <li className="header__menu-item">
          <span className="item__mony-peer-second">МВС: 35</span>
        </li>
      </ul>
    </header>
  );
};
