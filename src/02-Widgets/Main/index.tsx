import { FC, useState } from "react";

import { Modal } from "05-Shared";
import { Field, FormSelectEdifice } from "04-Entities";

import "./style.css";

export const Main: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idClickCell, setIdClickCell] = useState<number>(1);

  return (
    <main className="main">
      <Field
        callBackHandle={(e: any) => {
          setIdClickCell(e.target.id);
          setIsOpenModal(true);
        }}
      />
      <Modal
        propsClassName="type-select-edifice"
        isOpen={isOpenModal}
        propsContent={
          <FormSelectEdifice
            idClickCell={idClickCell}
            callBackHandle={() => {
              setIsOpenModal(false);
            }}
          />
        }
      />
    </main>
  );
};
