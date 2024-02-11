import { FC } from "react";

import { classNameEdifice } from "05-Shared/lib/className";

import "./style.css";

export enum enumEdificeType {
  noneEdifice = "NONE_EDIFICE",
  mineGoldOneLVL = "MINE_GOLD_LVL_ONE",
  mineGoldTwoLVL = "MINE_GOLD_LVL_TWO",
}

export type typeEdificeProps = {
  typeEdifice: enumEdificeType;
};

export const Edifice: FC<typeEdificeProps> = ({ typeEdifice }) => {
  let className: string;
  let edifice;

  switch (typeEdifice) {
    case enumEdificeType.mineGoldOneLVL:
      edifice = "Шахта золота 1 уровня";
      className = `${classNameEdifice} mine-gold mine-lvl-one`;
      break;

    case enumEdificeType.mineGoldTwoLVL:
      edifice = "Шахта золота 2 уровня";
      className = `${classNameEdifice} mine-gold mine-lvl-two`;
      break;

    case enumEdificeType.noneEdifice:
      edifice = "";
      className = `${classNameEdifice} none-edifice`;
      break;

    default:
      edifice = "тип здания не выбран";
      className = classNameEdifice;
      break;
  }

  return <div className={className}>{edifice}</div>;
};
