import { FC } from "react";
import { useSelector } from "react-redux";

import { ElementDeleteButton } from "../ElementDeleteButton";
import { ElementSubmitButton } from "../ElementSubmitButton";

import { defaultStateChecked } from "04-Entities/FormSelectEdifice/lib/consts";
import { ElementFormProps } from "04-Entities/FormSelectEdifice/lib/type";

import { BuyEdifice, IRootState, enumEdificeType } from "05-Shared";

import {
  classNameFormButtons,
  classNameFormButtonsWrapper,
  classNameFormErrorMessage,
  classNameFormFormNotDeleteButton,
  classNameFormMessage,
  classNameModalForm,
  classNameRadioContainer,
  classNameRadioInput,
  classNameRadioLabel,
  classNameRadioTitle,
} from "04-Entities/FormSelectEdifice/lib";

import "./style.css";

export const ElementForm: FC<ElementFormProps> = ({
  setChecked,
  messageError,
  checked,
  idClickCell,
  callBackHandle,
  setMessageError,
  isNoneEdifice,
}) => {
  const countMoney: number = useSelector((state: IRootState) => state.money.money);

  return (
    <form className={classNameModalForm}>
      {isNoneEdifice ? (
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
      ) : (
        <div className={classNameFormMessage}>Вы хотите удалить постройку?</div>
      )}

      <div className={classNameFormButtonsWrapper}>
        {messageError ? <span className={classNameFormErrorMessage}>{messageError}</span> : null}

        <div className={classNameFormButtons}>
          {isNoneEdifice ? (
            <ElementSubmitButton
              BuyEdifice={BuyEdifice}
              callBackHandle={callBackHandle}
              checked={checked}
              setChecked={setChecked}
              countMoney={countMoney}
              defaultStateChecked={defaultStateChecked}
              idClickCell={idClickCell}
              setMessageError={setMessageError}
            />
          ) : (
            <>
              <button
                className={classNameFormFormNotDeleteButton}
                onClick={(e: any) => {
                  e.preventDefault();
                  e.target.form.reset();

                  setMessageError("");

                  callBackHandle();
                }}>
                Нет
              </button>
              <ElementDeleteButton
                callBackHandle={callBackHandle}
                idClickCell={idClickCell}
                setMessageError={setMessageError}
              />
            </>
          )}
        </div>
      </div>
    </form>
  );
};
