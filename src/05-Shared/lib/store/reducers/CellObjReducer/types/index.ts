export type typeObjCell = {
  id: number;
  typeEdifice: any;
};

export type typeDefaultStateCell = {
  arrObjCell: typeObjCell[];
};

export enum enumActionCell {
  newCell = "NEW__CELL",
  changeCell = "CHANGE__CELL",
}

export type typeActionCell = {
  type: enumActionCell;
  payload?: typeObjCell;
};
