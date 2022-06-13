import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ columns, children }) => {
  return (
    <TableContext.Provider value={columns}>{children}</TableContext.Provider>
  );
};
