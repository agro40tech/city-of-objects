export const clickCellHandle = (setOpenModal: Function, isOpen: boolean) => {
  console.log(isOpen);
  if (isOpen) {
    setOpenModal(false);
  } else {
    setOpenModal(true);
  }
};
