import { typeCellObject } from "04-Entities/Field/lib/CreateArrObjCell";
import { IRootState, Money, MoneyPeerSecond, enumActionMony, enumEdificeType } from "05-Shared";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoneyPeerSecond } from "./lib/SetMoneyPeerSecond";

export const ElementMoney: FC = () => {
  const countMony: number = useSelector((state: IRootState) => state.money.money) as number;
  const arrObjCell: typeCellObject[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeCellObject[];

  const moneyPeerSecond: number = useSelector((state: IRootState) => state.money.moneyPeerSecond);

  const dispath = useDispatch();

  useEffect(() => {
    const arrEdifices: string[] = [];
    arrObjCell.forEach((cell) => {
      if (cell.typeEdifice !== enumEdificeType.noneEdifice) {
        arrEdifices.push(cell.typeEdifice);
      }
    });

    dispath({ type: enumActionMony.resetMoneyPeerSecond });
    setMoneyPeerSecond(arrEdifices, dispath);
  }, [arrObjCell]);

  useEffect(() => {
    if (moneyPeerSecond !== 0) {
      const intervalId = setInterval(() => {
        dispath({ type: enumActionMony.add, payload: moneyPeerSecond });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [moneyPeerSecond]);

  return (
    <>
      <div>
        <Money propsCountMony={countMony} propsClassName="header__count-money" />{" "}
        <MoneyPeerSecond
          propsCountMonyPeerSecond={moneyPeerSecond}
          propsClassName="header__money-peer-second"
        />
      </div>
    </>
  );
};
