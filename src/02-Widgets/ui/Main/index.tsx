import { FC, useEffect, useState } from "react";

import "./style.css";
import { Field } from "04-Entities/ui";
import { Modal } from "05-Shared";
import { clickCellHandle } from "./lib/clickCellHandle";

export const Main: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(isOpenModal);
  // }, [isOpenModal]);

  return (
    <main className="main">
      <Field
        callBack={() => {
          clickCellHandle(setIsOpenModal, isOpenModal);
        }}
        cellCount={10}
      />
      {isOpenModal ? <Modal propsClassName="type-select-edifice" /> : null}
    </main>
  );
};
