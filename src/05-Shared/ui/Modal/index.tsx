import { FC } from "react";
import "./style.css";

type typeModal = {
  propsClassName: string;
};

export const Modal: FC<typeModal> = ({ propsClassName }) => {
  const defaultClassName: string = "modal";
  const className: string = `${defaultClassName} ${propsClassName}`;

  return <div className={className}>1</div>;
};
