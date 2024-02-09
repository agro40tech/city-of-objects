import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CreateCell } from "./lib/CreateCell";
import { createArrObjCell, typeCellObject } from "./lib/CreateArrObjCell";

import { IRootState } from "05-Shared/lib/store";
import { enumActionCell, typeObjCell } from "05-Shared/lib/store/reducers";

import "./style.css";

type typeFieldProps = {
  cellCount: number;
  callBackHandle: Function;
};

export const Field: FC<typeFieldProps> = ({ cellCount, callBackHandle }) => {
  const [arrCell, setArrCell] = useState<React.ReactNode[]>([]);

  const dispatch = useDispatch();

  const arrObjChache: typeObjCell[] = JSON.parse(localStorage.getItem("arrObjCell") as string);

  const arrObjCell: typeObjCell[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeObjCell[];

  if (arrObjChache.length === 0) {
    const arr: typeCellObject[] = createArrObjCell(cellCount);
    arr.forEach((cell) => {
      dispatch({ type: enumActionCell.newCell, payload: cell });
    });
  }

  useEffect(() => {
    const result: React.ReactNode[] = arrObjCell.map((element) => (
      <CreateCell
        propsId={element.id}
        propsOnClick={callBackHandle}
        key={element.id}
        className="main__cell"
        typeEdifice={element.typeEdifice}
      />
    ));

    setArrCell(result);
    console.log(arrObjCell);
  }, [arrObjCell, callBackHandle]);

  return <div className="main__field">{arrCell}</div>;
};
