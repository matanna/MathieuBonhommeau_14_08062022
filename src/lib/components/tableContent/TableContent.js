import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Style from "./TableContent.module.scss";
import { TableContext } from "../../context/TableContext";
import downIcon from "../../assets/downward-arrow.png";
import { Row } from "../index";

const TableContent = ({ children }) => {
  // Sort columns in the order chose by the user
  const { columns, elements } = useContext(TableContext);
  console.log(elements);
  const sortColumns = columns.sort((a, b) => a.order - b.order);

  return (
    <table role="grid" className={Style.table}>
      <thead className={Style.thead}>
        <tr role="row">
          {sortColumns.map((e) => (
            <th key={e.data}>
              <div>
                <span>{e.title}</span>
                <button type="button" className={Style.icon}>
                  <img src={downIcon} alt="sort button" />
                </button>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {elements.map((e) => (
          <Row key={e.id} element={e} />
        ))}
      </tbody>
    </table>
  );
};

TableContent.propTypes = {};

export default TableContent;
