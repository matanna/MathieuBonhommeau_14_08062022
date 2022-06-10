import React, { useContext } from "react";
import Style from "./Modal.module.scss";
import PropTypes from "prop-types";
import { ModalContext } from "../../utils/context/ModalContext";

const Modal = ({ content }) => {
  const { displayModal, setDisplayModal } = useContext(ModalContext);

  return (
    <div className={Style.container}>
      <div className={Style.modal}>
        <p>{content}</p>
        <div className={Style.close}>
          <span onClick={() => setDisplayModal(!displayModal)}>X</span>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
