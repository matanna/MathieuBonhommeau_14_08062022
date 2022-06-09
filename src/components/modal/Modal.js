import React from "react";
import Style from "./Modal.module.scss";
import PropTypes from "prop-types";

const Modal = ({ content }) => {
  return (
    <div className={Style.container}>
      <div className={Style.modal}>
        <p>{content}</p>
        <div className={Style.close}>
          <span>X</span>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
