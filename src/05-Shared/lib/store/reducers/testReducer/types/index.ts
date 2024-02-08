export type typeDefaultState = {
  cash: number;
};

export enum enumActionTest {
  add = "ADD",
}

export type typeActionTest = {
  type: enumActionTest;
  payload?: any;
};
