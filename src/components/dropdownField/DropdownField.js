import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Style from "./DropdownField.module.scss";
import PropTypes from "prop-types";
import { formValuesSelector, setField } from "../../utils/redux/store";
import { useDispatch, useSelector } from "react-redux";

const DropdownField = ({ label, name, options }) => {
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);

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
        value={formValues[name]}
      />
    </div>
  );
};

DropdownField.propTypes = {};

export default DropdownField;
