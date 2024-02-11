import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { typeFormSelectEdificeProps } from "./lib/type";
import { defaultStateChecked } from "./lib/consts";
import { ElementForm } from "./ui/ElementForm";

import { IRootState, enumEdificeType, typeObjCell } from "05-Shared";

import "./style.css";

export const FormSelectEdifice: FC<typeFormSelectEdificeProps> = ({
  callBackHandle,
  idClickCell,
}) => {
  const arrObjCell: typeObjCell[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeObjCell[];

  const [messageError, setMessageError] = useState<string>("");
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
          setChecked(defaultStateChecked);
          callBackHandle(false);
        }}>
        x
      </button>

      <ElementForm
        callBackHandle={callBackHandle}
        checked={checked}
        idClickCell={idClickCell}
        isNoneEdifice={isNoneEdifice}
        messageError={messageError}
        setChecked={setChecked}
        setMessageError={setMessageError}
      />
    </div>
  );
};
