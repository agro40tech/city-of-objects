import { FC } from "react";

import "./style.css";

export type typeCellProps = {
  propsClassName?: string;
  propsContent?: any;
};

export const Cell: FC<typeCellProps> = ({ propsClassName, propsContent }) => {
  const defaultClassName: string = "cell";

  const className: string = propsClassName
    ? `${propsClassName} ${defaultClassName}`
    : defaultClassName;

  const content: any = propsContent ? propsContent : "Нет данных";
  return <div className={className}>{content}</div>;
};
