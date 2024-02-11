import { classNameMoney } from "05-Shared/lib/className";
import { FC } from "react";

import "./style.css";

type typeMonyProps = {
  propsCountMony: number;
  propsClassName?: string;
};

export const Money: FC<typeMonyProps> = ({ propsCountMony, propsClassName }) => {
  const className: string = propsClassName ? `${propsClassName} ${classNameMoney}` : classNameMoney;
  const message: string = "Монет: ";

  return (
    <span className={className}>
      {message}
      {propsCountMony}
    </span>
  );
};
