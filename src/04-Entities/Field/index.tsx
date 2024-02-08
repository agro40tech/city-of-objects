import { FC, useEffect, useState } from "react";

import "./style.css";
import { CreateCell } from "./lib/CreateCell";
import { createArrObjCell, typeCellObject } from "./lib/CreateArrObjCell";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "05-Shared/lib/store";
import { enumActionTest } from "05-Shared/lib/store/reducers";

type typeFieldProps = {
  cellCount: number;
  callBackHandle: Function;
};

export const Field: FC<typeFieldProps> = ({ cellCount, callBackHandle }) => {
  const [arrCell, setArrCell] = useState<React.ReactNode[]>([]);
  const [arrObjCells, setArrObjCells] = useState<typeCellObject[]>(createArrObjCell(cellCount));

  const dispatch = useDispatch();
  const cash = useSelector((state: IRootState) => state?.cash);

  const add = () => {
    dispatch({ type: enumActionTest.add, payload: 5 });
  };

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
    console.log(cash);
  }, [arrObjCells, cash]);

  return (
    <div className="main__field">
      {arrCell}{" "}
      <button
        onClick={() => {
          add();
        }}>
        add
      </button>
    </div>
  );
};
