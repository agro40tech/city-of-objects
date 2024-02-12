import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Field, FormEdifice, enumTypeFormEdifice } from "04-Entities";
import { IRootState, Modal, enumEdificeType, typeObjCell } from "05-Shared";

import "./style.css";

export const Main: FC = () => {
  const arrObjCell: typeObjCell[] = useSelector(
    (state: IRootState) => state.cell.arrObjCell
  ) as typeObjCell[];

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [idClickCell, setIdClickCell] = useState<number>(0);
  const [isNoneEdifice, setIsNoneEdifice] = useState<boolean>(false);

  useEffect(() => {
    arrObjCell.forEach((cell) => {
      if (cell.id === Number(idClickCell)) {
        if (cell.typeEdifice === enumEdificeType.noneEdifice) {
          setIsNoneEdifice(true);
        } else {
          setIsNoneEdifice(false);
        }
      }
    });
  }, [idClickCell, arrObjCell]);

  return (
    <main className="main">
      <Field
        callBackHandle={(e: any) => {
          setIdClickCell(e.target.id);
          setIsOpenModal(true);
        }}
      />
      {isNoneEdifice ? (
        <Modal
          propsClassName="type-select-edifice"
          isOpen={isOpenModal}
          propsContent={
            <FormEdifice
              typeForm={enumTypeFormEdifice.selectForm}
              idClickCell={idClickCell}
              callBackHandle={() => {
                setIsOpenModal(false);
              }}
            />
          }
        />
      ) : (
        <Modal
          propsClassName="type-delete-edifice"
          isOpen={isOpenModal}
          propsContent={
            <FormEdifice
              typeForm={enumTypeFormEdifice.deleteForm}
              idClickCell={idClickCell}
              callBackHandle={() => {
                setIsOpenModal(false);
              }}
            />
          }
        />
      )}
    </main>
  );
};
