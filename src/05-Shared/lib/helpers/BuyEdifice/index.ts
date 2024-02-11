import { configPriceEdifice } from "./config";

import { enumActionMony, enumEdificeType } from "05-Shared";

export const BuyEdifice = (typeEdifice: string, countMoney: number, dispath: Function) => {
  switch (typeEdifice) {
    case enumEdificeType.mineGoldOneLVL:
      if (countMoney >= configPriceEdifice.MINE_GOLD_LVL_ONE) {
        dispath({ type: enumActionMony.take, payload: configPriceEdifice.MINE_GOLD_LVL_ONE });
        return true;
      } else {
        return false;
      }

    case enumEdificeType.mineGoldTwoLVL:
      if (countMoney >= configPriceEdifice.MINE_GOLD_LVL_TWO) {
        dispath({ type: enumActionMony.take, payload: configPriceEdifice.MINE_GOLD_LVL_TWO });
        return true;
      } else {
        return false;
      }

    default:
      console.log("Неверный тип здания");
      return false;
  }
};
