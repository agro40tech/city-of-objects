import { FC } from "react";
import { useDispatch } from "react-redux";

import { typeElementSubmitButtonProps } from "04-Entities/FormSelectEdifice/lib/type";
import { enumActionCell } from "05-Shared";

import "./style.css";

export const ElementSubmitButton: FC<typeElementSubmitButtonProps> = ({
  BuyEdifice,
  countMoney,
  callBackHandle,
  checked,
  defaultStateChecked,
  idClickCell,
  setMessageError,
  setChecked,
}) => {
  const dispatch = useDispatch();

  return (
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
            setMessageError("");
            setChecked(defaultStateChecked);
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
  );
};
