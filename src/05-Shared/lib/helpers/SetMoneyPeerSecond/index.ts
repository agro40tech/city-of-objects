import { enumActionMony, enumEdificeType } from "05-Shared";

const configPeerSecondMoney = {
  MINE_GOLD_LVL_ONE: 1,
  MINE_GOLD_LVL_TWO: 5,
};

export const setMoneyPeerSecond = (arrEdifices: string[], dispath: Function) => {
  let moneyToAdd = 0;

  arrEdifices.forEach((typeEdifice) => {
    switch (typeEdifice) {
      case enumEdificeType.mineGoldOneLVL:
        moneyToAdd += configPeerSecondMoney.MINE_GOLD_LVL_ONE;
        break;
      case enumEdificeType.mineGoldTwoLVL:
        moneyToAdd += configPeerSecondMoney.MINE_GOLD_LVL_TWO;
        break;
      default:
        break;
    }
  });

  dispath({ type: enumActionMony.addMoneyPeerSecond, payload: moneyToAdd });
};
