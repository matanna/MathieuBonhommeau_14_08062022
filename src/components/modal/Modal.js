import React, { useContext } from "react";
import Style from "./Modal.module.scss";
import { ModalContext } from "../../utils/context/ModalContext";

/**
 * The Modal function is a functional component that renders a modal that displays a message to the user when an employee
 * is created
 * @returns A modal that displays "Employee Created!"
 */
const Modal = () => {
  const { displayModal, setDisplayModal } = useContext(ModalContext);

  return (
    <div className={Style.container}>
      <div className={Style.modal}>
        <p>"Employee Created!"</p>
        <div className={Style.close}>
          <span onClick={() => setDisplayModal(!displayModal)}>X</span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
