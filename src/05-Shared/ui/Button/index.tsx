import { FC } from "react";

import { classNameButton } from "05-Shared/lib/className";
import "./style.css";

type typeElementButtonProps = {
  propsClassName?: string;
  onclickHandle?: Function;
  text?: string;
};

export const ElementButton: FC<typeElementButtonProps> = ({
  propsClassName,
  onclickHandle,
  text,
}) => {
  const className: string = propsClassName
    ? `${propsClassName} ${classNameButton}`
    : classNameButton;

  const content: string = text ? text : "Пустая кнопка";

  return onclickHandle ? (
    <button
      className={className}
      onClick={(e: any) => {
        onclickHandle(e);
      }}>
      {content}
    </button>
  ) : (
    <button className={className}>{content}</button>
  );
};
