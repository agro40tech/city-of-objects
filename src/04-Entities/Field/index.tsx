import { FC, useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { CreateCell } from "./lib/CreateCell";
import { IRootState } from "05-Shared/lib/store";
import { typeObjCell } from "05-Shared/lib/store/reducers";

type typeFieldProps = {
  cellCount: number;
  callBackHandle: Function;
};

export const Field: FC<typeFieldProps> = ({ cellCount, callBackHandle }) => {
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
        className="main__cell"
        typeEdifice={element.typeEdifice}
      />
    ));

    setArrCell(result);
    console.log(arrObjCell);
  }, [arrObjCell, callBackHandle]);

  return <div className="main__field">{arrCell}</div>;
};
