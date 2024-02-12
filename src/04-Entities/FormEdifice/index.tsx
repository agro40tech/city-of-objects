import { FC, useState } from "react";

import { classNameModalButtonClose, classNameModalFormWrapper } from "./lib";
import { defaultStateChecked } from "./lib/consts";
import { ElementFormSelectEdifice } from "./ui/ElementFormSelect";
import { ElementFormDeleteEdifice } from "./ui/ElementFormDelete";

import "./style.css";

export enum enumTypeFormEdifice {
  deleteForm = "DELETE__FORM",
  selectForm = "SELECT__FORM",
}

type typeFormEdificeProps = {
  callBackHandle: Function;
  idClickCell: number;
  typeForm: enumTypeFormEdifice;
};

export const FormEdifice: FC<typeFormEdificeProps> = ({
  callBackHandle,
  idClickCell,
  typeForm,
}) => {
  const [messageError, setMessageError] = useState<string>("");
  const [checked, setChecked] = useState<string>(defaultStateChecked);

  return (
    <div className={classNameModalFormWrapper}>
      <button
        className={classNameModalButtonClose}
        onClick={(e: any) => {
          e.target.nextSibling.reset();
          setMessageError("");
          setChecked(defaultStateChecked);
          callBackHandle(false);
        }}>
        x
      </button>

      {typeForm === enumTypeFormEdifice.selectForm ? (
        <ElementFormSelectEdifice
          callBackHandle={callBackHandle}
          checked={checked}
          idClickCell={idClickCell}
          messageError={messageError}
          setChecked={setChecked}
          setMessageError={setMessageError}
        />
      ) : typeForm === enumTypeFormEdifice.deleteForm ? (
        <ElementFormDeleteEdifice callBackHandle={callBackHandle} idClickCell={idClickCell} />
      ) : null}
    </div>
  );
};
