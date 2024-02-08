import { FC } from "react";

import "./style.css";

export enum enumEdificeType {
  noneEdifice = "NONE_EDIFICE",
  mineGold = "MINE_GOLD",
}

export type typeEdificeProps = {
  typeEdifice: enumEdificeType;
};

export const Edifice: FC<typeEdificeProps> = ({ typeEdifice }) => {
  const defaultClassName: string = "cell__edifice";

  let className: string;
  let edifice;

  switch (typeEdifice) {
    case enumEdificeType.mineGold:
      edifice = "Шахта золота";
      className = `${defaultClassName} mine-gold`;
      break;

    case enumEdificeType.noneEdifice:
      edifice = "Нет построек";
      className = `${defaultClassName} none-edifice`;
      break;

    default:
      edifice = "тип здания не выбран";
      className = defaultClassName;
      break;
  }

  return <div className={className}>{edifice}</div>;
};
