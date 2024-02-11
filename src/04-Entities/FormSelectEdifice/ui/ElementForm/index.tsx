import { FC } from "react";
import { useSelector } from "react-redux";

import { ElementDeleteButton } from "../ElementDeleteButton";
import { ElementSubmitButton } from "../ElementSubmitButton";

import { defaultStateChecked } from "04-Entities/FormSelectEdifice/lib/consts";
import { ElementFormProps } from "04-Entities/FormSelectEdifice/lib/type";

import { BuyEdifice, IRootState, enumEdificeType } from "05-Shared";

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
    <form className="modal__form">
      {isNoneEdifice ? (
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
      ) : (
        <div className="form__message">Вы хотите удалить постройку?</div>
      )}

      <div className="form__buttons-wrapper">
        {messageError ? <span className="form__error-message">{messageError}</span> : null}
        <div className="form__buttons">
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
                className="form__not-delete-button"
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
