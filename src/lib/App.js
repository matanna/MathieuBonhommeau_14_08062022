import React from "react";
import PropTypes from "prop-types";
import Style from "./App.module.scss";
import {
  FooterTable,
  HeaderTable,
  NumberOfEntries,
  Pagination,
  TableContent,
  Row,
  Search,
} from "./components";
import { TableProvider } from "./context/TableContext";

const App = ({ elements, columns }) => {
  return (
    <TableProvider columns={{ columns, elements }}>
      <HeaderTable>
        <NumberOfEntries />
        <Search />
      </HeaderTable>
      <TableContent>
        <Row />
      </TableContent>
      <FooterTable>
        <Pagination />
      </FooterTable>
    </TableProvider>
  );
};

App.propTypes = {};

export default App;
