import { Cell, Edifice, enumEdificeType } from "05-Shared";
import { FC } from "react";

type typeCreateCellProps = {
  className: string;
  typeEdifice: enumEdificeType;
  propsOnClick?: Function;
  propsId: number;
};

export const CreateCell: FC<typeCreateCellProps> = ({
  typeEdifice = enumEdificeType.noneEdifice,
  className,
  propsOnClick,
  propsId,
}) => {
  return (
    <>
      {propsOnClick ? (
        <Cell
          propsId={propsId}
          propsCallBack={propsOnClick}
          propsClassName={className}
          propsContent={<Edifice typeEdifice={typeEdifice} />}
        />
      ) : (
        <Cell
          propsId={propsId}
          propsClassName={className}
          propsContent={<Edifice typeEdifice={typeEdifice} />}
        />
      )}
    </>
  );
};
