import { FC } from "react";
import "./style.css";
import { classNameModal } from "05-Shared/lib/className";

type typeModal = {
  propsClassName: string;
  propsContent: React.ReactNode;
  isOpen: boolean;
};

export const Modal: FC<typeModal> = ({ propsClassName, propsContent, isOpen }) => {
  const className: string = `${classNameModal} ${propsClassName}`;

  return (
    <>
      {isOpen ? (
        <dialog className={className} aria-modal="true" open>
          {propsContent}
        </dialog>
      ) : (
        <dialog className={className}>{propsContent}</dialog>
      )}
    </>
  );
};
