import { FC, useEffect, useState } from "react";

import "./style.css";
import { CreateCell } from "./lib/CreateCell";
import { createArrObjCell, typeCellObject } from "./lib/CreateArrObjCell";

type typeFieldProps = {
  cellCount: number;
  callBack: Function;
};

export const Field: FC<typeFieldProps> = ({ cellCount, callBack }) => {
  const [arrCell, setArrCell] = useState<React.ReactNode[]>([]);
  const [arrObjCells, setArrObjCells] = useState<typeCellObject[]>(createArrObjCell(cellCount));

  useEffect(() => {
    const result: React.ReactNode[] = arrObjCells.map((element) => (
      <CreateCell
        propsId={element.id}
        propsOnClick={callBack}
        key={element.id}
        className="main__cell"
        typeEdifice={element.typeEdifice}
      />
    ));
    setArrCell(result);
  }, [arrObjCells]);

  return <div className="main__field">{arrCell}</div>;
};
