import { FC } from "react";
import { useDispatch } from "react-redux";

import {
  classNameFormButtonsWrapper,
  classNameFormDeleteButton,
  classNameFormFormNotDeleteButton,
  classNameFormMessage,
  classNameModalForm,
} from "04-Entities/FormEdifice/lib";
import { ElementButton, enumActionCell, enumEdificeType } from "05-Shared";

import "./style.css";

type typeFormDeleteEdificeProps = {
  idClickCell: number;
  callBackHandle: Function;
};

export const ElementFormDeleteEdifice: FC<typeFormDeleteEdificeProps> = ({
  callBackHandle,
  idClickCell,
}) => {
  const dispatch = useDispatch();

  return (
    <form className={classNameModalForm}>
      <div className={classNameFormMessage}>Вы хотите удалить постройку?</div>

      <div className={classNameFormButtonsWrapper}>
        {/* Кнопка отменить удаление здания */}
        <ElementButton
          text="Нет"
          propsClassName={classNameFormFormNotDeleteButton}
          onclickHandle={(e: any) => {
            e.preventDefault();
            e.target.form.reset();

            callBackHandle();
          }}
        />

        {/* Кнопка удалить здание */}
        <ElementButton
          text="Да"
          propsClassName={classNameFormDeleteButton}
          onclickHandle={(e: any) => {
            e.preventDefault();
            e.target.form.reset();

            const cellObj = {
              id: Number(idClickCell),
              typeEdifice: enumEdificeType.noneEdifice,
            };

            dispatch({ type: enumActionCell.changeCell, payload: cellObj });
            callBackHandle();
          }}
        />
      </div>
    </form>
  );
};
