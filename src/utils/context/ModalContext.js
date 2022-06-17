import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <ModalContext.Provider value={{ displayModal, setDisplayModal }}>
      {children}
    </ModalContext.Provider>
  );
};