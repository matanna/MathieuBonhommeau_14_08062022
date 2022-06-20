import React, { createContext, useState } from "react";

// React context for display or not the modal
export const ModalContext = createContext();

/**
 * The ModalProvider is a component that wraps the entire application and provides the ModalContext to all of its children
 * @returns The ModalProvider is returning the ModalContext.Provider with the value of displayModal and setDisplayModal.
 */
export const ModalProvider = ({ children }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <ModalContext.Provider value={{ displayModal, setDisplayModal }}>
      {children}
    </ModalContext.Provider>
  );
};
