import { FC } from "react";

import "./style.css";

type typeFormSelectEdifice = {
  callBackHandle: Function;
};

export const FormSelectEdifice: FC<typeFormSelectEdifice> = ({ callBackHandle }) => {
  return (
    <div className="modal__form-wrapper">
      <form className="modal__form">
        <div className="radio-container">
          <label className="radio-label">
            <input className="radio" type="radio" />
            <span className="radio-title">Золотая шахта 1 уровня</span>
          </label>
          <label className="radio-label">
            <input className="radio" type="radio" />
            <span className="radio-title">Золотая шахта 2 уровня</span>
          </label>
        </div>

        <button
          className="form__submit-button"
          onClick={(e: any) => {
            e.preventDefault();
            e.target.form.reset();

            callBackHandle();
          }}>
          Построить
        </button>
      </form>
    </div>
  );
};
