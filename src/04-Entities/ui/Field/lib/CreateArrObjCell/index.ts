import { enumEdificeType } from "05-Shared";

export type typeCellObject = {
  id: number;
  typeEdifice: enumEdificeType;
};

export const createArrObjCell = (cellCount: number) => {
  const arrCell: typeCellObject[] = [];

  for (let i = 0; i < cellCount; i++) {
    const cellObject: typeCellObject = { id: i, typeEdifice: enumEdificeType.noneEdifice };
    arrCell.push(cellObject);
  }

  return arrCell;
};
