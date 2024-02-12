import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  IRootState,
  Money,
  MoneyPeerSecond,
  enumActionMony,
  enumEdificeType,
  setMoneyPeerSecond,
  typeCellObject,
} from "05-Shared";

import { classNameHeaderList, classNameListItem } from "./lib";
import "./style.css";

export const ElementMoney: FC = () => {
  const countMony: number = useSelector((state: IRootState) => state.money.money);
  const moneyPeerSecond: number = useSelector((state: IRootState) => state.money.moneyPeerSecond);

  const arrObjCell: typeCellObject[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeCellObject[];

  const dispath = useDispatch();

  // Обновление кол-во МВС
  useEffect(() => {
    const arrEdifices: string[] = [];

    arrObjCell.forEach((cell) => {
      if (cell.typeEdifice !== enumEdificeType.noneEdifice) {
        arrEdifices.push(cell.typeEdifice);
      }
    });

    dispath({ type: enumActionMony.resetMoneyPeerSecond });
    setMoneyPeerSecond(arrEdifices, dispath);
  }, [arrObjCell, dispath]);

  // Добавление монет раз в 1 секунду на кол-во МВС
  useEffect(() => {
    if (moneyPeerSecond !== 0) {
      const intervalId = setInterval(() => {
        dispath({ type: enumActionMony.add, payload: moneyPeerSecond });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [moneyPeerSecond, dispath]);

  return (
    <ul className={classNameHeaderList}>
      <li className={classNameListItem}>
        <Money propsCountMony={countMony} propsClassName="item__count-money" />
      </li>
      <li className={classNameListItem}>
        <MoneyPeerSecond
          propsCountMonyPeerSecond={moneyPeerSecond}
          propsClassName="item__money-peer-second"
        />
      </li>
    </ul>
  );
};
