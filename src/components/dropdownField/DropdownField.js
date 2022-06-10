import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Style from "./DropdownField.module.scss";
import PropTypes from "prop-types";
import { setField } from "../../utils/redux/store";
import { useDispatch } from "react-redux";

const DropdownField = ({ label, name, options }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      setField({
        name: name,
        value: e.value,
      })
    );
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Dropdown
        id={name}
        options={options}
        onChange={handleChange}
        controlClassName={Style.field}
      />
    </div>
  );
};

DropdownField.propTypes = {};

export default DropdownField;
