import { FC } from "react";

import "./style.css";
import { classNameEdifice } from "05-Shared/className";

export enum enumEdificeType {
  noneEdifice = "NONE_EDIFICE",
  mineGold = "MINE_GOLD",
}

export type typeEdificeProps = {
  typeEdifice: enumEdificeType;
};

export const Edifice: FC<typeEdificeProps> = ({ typeEdifice }) => {
  let className: string;
  let edifice;

  switch (typeEdifice) {
    case enumEdificeType.mineGold:
      edifice = "Шахта золота";
      className = `${classNameEdifice} mine-gold`;
      break;

    case enumEdificeType.noneEdifice:
      edifice = "Нет построек";
      className = `${classNameEdifice} none-edifice`;
      break;

    default:
      edifice = "тип здания не выбран";
      className = classNameEdifice;
      break;
  }

  return <div className={className}>{edifice}</div>;
};
