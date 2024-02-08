import { FC } from "react";

import "./style.css";
import { classNameCell } from "05-Shared/className";

export type typeCellProps = {
  propsClassName?: string;
  propsContent?: any;
  propsCallBack?: Function;
  propsId: number;
};

export const Cell: FC<typeCellProps> = ({
  propsClassName,
  propsContent,
  propsCallBack,
  propsId,
}) => {
  const defaultId: string = propsId.toString();
  const className: string = propsClassName ? `${propsClassName} ${classNameCell}` : classNameCell;

  const content: any = propsContent ? propsContent : "Нет данных";

  return propsCallBack ? (
    <div
      className={className}
      onClick={() => {
        propsCallBack();
      }}
      id={defaultId}>
      {content}
    </div>
  ) : (
    <div className={className} id={defaultId}>
      {content}
    </div>
  );
};
