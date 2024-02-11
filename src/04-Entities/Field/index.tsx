import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CreateCell, IRootState, typeObjCell } from "05-Shared";

import "./style.css";

type typeFieldProps = {
  callBackHandle: Function;
};

export const Field: FC<typeFieldProps> = ({ callBackHandle }) => {
  const [arrCell, setArrCell] = useState<React.ReactNode[]>([]);

  const arrObjCell: typeObjCell[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeObjCell[];

  useEffect(() => {
    const result: React.ReactNode[] = arrObjCell.map((element) => (
      <CreateCell
        propsId={element.id}
        propsOnClick={callBackHandle}
        key={element.id}
        className="field__cell"
        typeEdifice={element.typeEdifice}
      />
    ));

    setArrCell(result);
  }, [arrObjCell, callBackHandle]);

  return <div className="main__field">{arrCell}</div>;
};
