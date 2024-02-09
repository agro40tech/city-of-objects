import { FC } from "react";
import "./Assets/style.css";

import { HomePage } from "01-Pages";

const App: FC = () => {
  const arrObjCellChache = localStorage.getItem("arrObjCell");

  if (!arrObjCellChache) {
    localStorage.setItem("arrObjCell", JSON.stringify([]));
  }

  return (
    <>
      <HomePage />
    </>
  );
};

export default App;
