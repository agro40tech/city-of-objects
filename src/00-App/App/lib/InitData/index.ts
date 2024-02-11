import { config } from "00-App/App/config";
import { createArrObjCell, enumActionCell, enumActionMony } from "05-Shared";

export const initData = (dispatch: Function) => {
  const arrObjCellChache = localStorage.getItem("arrObjCell");

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
};
