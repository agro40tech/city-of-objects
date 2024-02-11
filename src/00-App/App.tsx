import { FC } from "react";
import "./style/style.css";

import { HomePage } from "01-Pages";
import { useDispatch } from "react-redux";
import { createArrObjCell } from "04-Entities/Field/lib/CreateArrObjCell";
import { enumActionCell } from "05-Shared/lib/store/reducers";
import { enumActionMony } from "05-Shared/lib/store/reducers/MonyReducer/types";

const config = {
  cellCount: 10,
  defaultMoney: 10,
  defaultMoneyPeerSecond: 0,
};

const App: FC = () => {
  const arrObjCellChache = localStorage.getItem("arrObjCell");
  const dispatch = useDispatch();

  if (!arrObjCellChache) {
    const newArrObjCell = createArrObjCell(config.cellCount);

    localStorage.setItem("arrObjCell", JSON.stringify([]));
    localStorage.setItem("money", config.defaultMoney.toString());
    localStorage.setItem("moneyPeerSecond", config.defaultMoneyPeerSecond.toString());

    dispatch({ type: enumActionCell.setArr, payload: newArrObjCell });
    dispatch({
      type: enumActionMony.set,
      payload: config.defaultMoney,
    });
    dispatch({
      type: enumActionMony.setMoneyPeerSecond,
      payload: config.defaultMoneyPeerSecond,
    });
  } else {
    localStorage.setItem("moneyPeerSecond", config.defaultMoneyPeerSecond.toString());
    dispatch({
      type: enumActionCell.setArr,
      payload: JSON.parse(localStorage.getItem("arrObjCell") as string),
    });
    dispatch({
      type: enumActionMony.set,
      payload: Number(localStorage.getItem("money")),
    });
  }

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
