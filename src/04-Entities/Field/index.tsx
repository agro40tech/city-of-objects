import { FC, useEffect, useState } from "react";

import "./style.css";
import { CreateCell } from "./lib/CreateCell";
import { createArrObjCell, typeCellObject } from "./lib/CreateArrObjCell";

type typeFieldProps = {
  cellCount: number;
  callBackHandle: Function;
};

export const Field: FC<typeFieldProps> = ({ cellCount, callBackHandle }) => {
  const [arrCell, setArrCell] = useState<React.ReactNode[]>([]);
  const [arrObjCells, setArrObjCells] = useState<typeCellObject[]>(createArrObjCell(cellCount));

  useEffect(() => {
    const result: React.ReactNode[] = arrObjCells.map((element) => (
      <CreateCell
        propsId={element.id}
        propsOnClick={callBackHandle}
        key={element.id}
        className="main__cell"
        typeEdifice={element.typeEdifice}
      />
    ));
    setArrCell(result);
    console.log(arrObjCells);
  }, [arrObjCells]);

  return <div className="main__field">{arrCell}</div>;
};
