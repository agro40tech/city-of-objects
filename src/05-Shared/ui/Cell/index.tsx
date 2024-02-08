import { FC } from "react";

import "./style.css";

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
  const defaultClassName: string = "cell";
  const defaultId: string = propsId.toString();

  const className: string = propsClassName
    ? `${propsClassName} ${defaultClassName}`
    : defaultClassName;

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
