import { classNameMoneyPeerSecond } from "05-Shared/lib/className";
import { FC } from "react";

type typeMonyProps = {
  propsCountMonyPeerSecond: number;
  propsClassName?: string;
};

export const MoneyPeerSecond: FC<typeMonyProps> = ({
  propsCountMonyPeerSecond,
  propsClassName,
}) => {
  const className: string = propsClassName
    ? `${propsClassName} ${classNameMoneyPeerSecond}`
    : classNameMoneyPeerSecond;
  const message: string = "МВС: ";

  return (
    <span className={className}>
      {message}
      {propsCountMonyPeerSecond}
    </span>
  );
};
