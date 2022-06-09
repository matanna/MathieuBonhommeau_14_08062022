import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Style from "./DropdownField.module.scss";
import PropTypes from "prop-types";

const DropdownField = ({ label, name, options }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Dropdown
        id={name}
        options={options}
        /*onChange={this._onSelect}*/
        value={options[0]}
        controlClassName={Style.field}
      />
    </div>
  );
};

DropdownField.propTypes = {};

export default DropdownField;
