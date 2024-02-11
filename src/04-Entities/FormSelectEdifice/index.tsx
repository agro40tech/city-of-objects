import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { enumActionCell, typeObjCell } from "05-Shared/lib/store/reducers";
import { enumEdificeType } from "05-Shared";

import "./style.css";
import { IRootState } from "05-Shared/lib/store";
import { BuyEdifice } from "./lib/BuyEdifice";

type typeFormSelectEdifice = {
  callBackHandle: Function;
  idClickCell: number;
};

export const FormSelectEdifice: FC<typeFormSelectEdifice> = ({ callBackHandle, idClickCell }) => {
  const defaultStateChecked = "none";
  const dispatch = useDispatch();
  const countMoney: number = useSelector((state: IRootState) => state.money.money) as number;

  const arrObjCell: typeObjCell[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeObjCell[];

  const [messageError, setMessageError] = useState<string>();
  const [checked, setChecked] = useState<string>(defaultStateChecked);
  const [isNoneEdifice, setIsNoneEdifice] = useState<boolean>(false);

  useEffect(() => {
    arrObjCell.forEach((cell) => {
      if (cell.id === Number(idClickCell)) {
        if (cell.typeEdifice === enumEdificeType.noneEdifice) {
          setIsNoneEdifice(true);
        } else {
          setIsNoneEdifice(false);
        }
      }
    });
  }, [idClickCell, arrObjCell]);

  return (
    <div className="modal__form-wrapper">
      <button
        className="modal__button-close"
        onClick={(e: any) => {
          e.target.nextSibling.reset();
          setMessageError("");
          callBackHandle(false);
        }}>
        x
      </button>
      <form className="modal__form">
        <div className="radio-container">
          <label className="radio-label">
            <input
              className="radio"
              type="radio"
              name="mineGold"
              id={enumEdificeType.mineGoldOneLVL}
              onClick={() => {
                setChecked(enumEdificeType.mineGoldOneLVL);
              }}
            />
            <span className="radio-title">Золотая шахта 1 уровня</span>
            <span className="radio-title">10 монет</span>
          </label>
          <label className="radio-label">
            <input
              className="radio"
              type="radio"
              name="mineGold"
              id={enumEdificeType.mineGoldTwoLVL}
              onClick={() => {
                setChecked(enumEdificeType.mineGoldTwoLVL);
              }}
            />
            <span className="radio-title">Золотая шахта 2 уровня</span>
            <span className="radio-title">20 монет</span>
          </label>
        </div>

        {messageError ? <span className="form__error-message">{messageError}</span> : null}
        <button
          className="form__submit-button"
          onClick={(e: any) => {
            e.preventDefault();
            if (checked !== defaultStateChecked) {
              e.target.form.reset();

              if (BuyEdifice(checked, countMoney, dispatch)) {
                const cellObj = {
                  id: Number(idClickCell),
                  typeEdifice: checked,
                };
                dispatch({ type: enumActionCell.changeCell, payload: cellObj });
                callBackHandle();
              } else {
                setMessageError("Тебе не хватает денек((");
              }
            } else {
              setMessageError("Выберите постройку");
            }
          }}>
          Построить
        </button>
        {!isNoneEdifice ? (
          <button
            className="form__submit-button"
            onClick={(e: any) => {
              e.preventDefault();
              e.target.form.reset();

              const cellObj = {
                id: Number(idClickCell),
                typeEdifice: enumEdificeType.noneEdifice,
              };

              dispatch({ type: enumActionCell.changeCell, payload: cellObj });
              callBackHandle();
            }}>
            Удалить постройку
          </button>
        ) : null}
      </form>
    </div>
  );
};
