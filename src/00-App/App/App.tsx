import { FC } from "react";
import { useDispatch } from "react-redux";

import { HomePage } from "01-Pages";
import { initData } from "./lib/InitData";

import "../style/style.css";

const App: FC = () => {
  const dispatch = useDispatch();
  initData(dispatch);

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
