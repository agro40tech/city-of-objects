import { typeActionCell, typeDefaultStateCell } from "./types";

const defaultState: typeDefaultStateCell = {
  arrObjCell: [],
};

export const cellReducer = (state = defaultState, action: typeActionCell) => {
  switch (action.type) {
    case "NEW__CELL":
      localStorage.setItem("arrObjCell", JSON.stringify(state.arrObjCell));
      return { ...state, arrObjCell: [...state.arrObjCell, action.payload] };

    case "CHANGE__CELL":
      state.arrObjCell.forEach((cell, index) => {
        if (cell.id === action.payload?.id) {
          state.arrObjCell[index] = { id: cell.id, typeEdifice: action.payload.typeEdifice };
        }
      });

      localStorage.setItem("arrObjCell", JSON.stringify(state.arrObjCell));
      return { ...state, arrObjCell: [...state.arrObjCell] };

    case "SET__ARR":
      localStorage.setItem("arrObjCell", JSON.stringify(action.payload));
      return { ...state, arrObjCell: action.payload };

    default:
      return state;
  }
};
