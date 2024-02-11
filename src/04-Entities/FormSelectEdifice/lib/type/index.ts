export type typeFormSelectEdificeProps = {
  callBackHandle: Function;
  idClickCell: number;
};

export type ElementFormProps = {
  setChecked: Function;
  messageError: string;
  checked: string;
  idClickCell: number;
  callBackHandle: Function;
  setMessageError: Function;
  isNoneEdifice: boolean;
};

export type typeElementDeleteButtonProps = {
  idClickCell: number;
  callBackHandle: Function;
  setMessageError: Function;
};

export type typeElementSubmitButtonProps = {
  checked: string;
  setChecked: Function;
  defaultStateChecked: string;
  BuyEdifice: Function;
  countMoney: number;
  idClickCell: number;
  callBackHandle: Function;
  setMessageError: Function;
};
