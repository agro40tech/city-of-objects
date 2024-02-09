import { FC } from "react";
import "./Assets/style.css";

import { HomePage } from "01-Pages";
import { useDispatch } from "react-redux";
import { createArrObjCell } from "04-Entities/Field/lib/CreateArrObjCell";
import { enumActionCell } from "05-Shared/lib/store/reducers";

const App: FC = () => {
  const arrObjCellChache = localStorage.getItem("arrObjCell");
  const dispatch = useDispatch();
  if (!arrObjCellChache) {
    localStorage.setItem("arrObjCell", JSON.stringify([]));
    const cellCount = 10;
    const newArrObjCell = createArrObjCell(cellCount);

    dispatch({ type: enumActionCell.setArr, payload: newArrObjCell });
  } else {
    dispatch({
      type: enumActionCell.setArr,
      payload: JSON.parse(localStorage.getItem("arrObjCell") as string),
    });
  }

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
