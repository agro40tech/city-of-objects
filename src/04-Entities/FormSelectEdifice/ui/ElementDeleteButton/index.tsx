import { FC } from "react";
import { useDispatch } from "react-redux";

import { typeElementDeleteButtonProps } from "04-Entities/FormSelectEdifice/lib/type";
import { enumActionCell, enumEdificeType } from "05-Shared";

import "./style.css";

export const ElementDeleteButton: FC<typeElementDeleteButtonProps> = ({
  callBackHandle,
  idClickCell,
  setMessageError,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      className="form__delete-button"
      onClick={(e: any) => {
        e.preventDefault();
        e.target.form.reset();

        const cellObj = {
          id: Number(idClickCell),
          typeEdifice: enumEdificeType.noneEdifice,
        };

        setMessageError("");
        dispatch({ type: enumActionCell.changeCell, payload: cellObj });
        callBackHandle();
      }}>
      Да
    </button>
  );
};
