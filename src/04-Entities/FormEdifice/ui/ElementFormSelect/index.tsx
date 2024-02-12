import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  classNameFormButtonsWrapper,
  classNameFormErrorMessage,
  classNameFormSubmitButton,
  classNameModalForm,
  classNameRadioContainer,
  classNameRadioInput,
  classNameRadioLabel,
  classNameRadioTitle,
  defaultStateChecked,
} from "04-Entities/FormEdifice/lib";

import { BuyEdifice, ElementButton, IRootState, enumActionCell, enumEdificeType } from "05-Shared";

import "./style.css";

type typeElementFormSelectProps = {
  setChecked: Function;
  messageError: string;
  checked: string;
  idClickCell: number;
  callBackHandle: Function;
  setMessageError: Function;
};

export const ElementFormSelectEdifice: FC<typeElementFormSelectProps> = ({
  setChecked,
  messageError,
  checked,
  idClickCell,
  callBackHandle,
  setMessageError,
}) => {
  const countMoney: number = useSelector((state: IRootState) => state.money.money);
  const dispatch = useDispatch();

  return (
    <form className={classNameModalForm}>
      <div className={classNameRadioContainer}>
        <label className={classNameRadioLabel}>
          <input
            className={classNameRadioInput}
            type="radio"
            name="mineGold"
            id={enumEdificeType.mineGoldOneLVL}
            onClick={() => {
              setChecked(enumEdificeType.mineGoldOneLVL);
            }}
          />
          <span className={classNameRadioTitle}>Золотая шахта 1 уровня</span>
          <span className={classNameRadioTitle}>10 монет</span>
        </label>
        <label className={classNameRadioLabel}>
          <input
            className={classNameRadioInput}
            type="radio"
            name="mineGold"
            id={enumEdificeType.mineGoldTwoLVL}
            onClick={() => {
              setChecked(enumEdificeType.mineGoldTwoLVL);
            }}
          />
          <span className={classNameRadioTitle}>Золотая шахта 2 уровня</span>
          <span className={classNameRadioTitle}>20 монет</span>
        </label>
      </div>

      <div className={classNameFormButtonsWrapper}>
        {messageError ? <span className={classNameFormErrorMessage}>{messageError}</span> : null}

        {/* Кнопка построить здание */}
        <ElementButton
          text="Построить"
          propsClassName={classNameFormSubmitButton}
          onclickHandle={(e: any) => {
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
          }}
        />
      </div>
    </form>
  );
};
