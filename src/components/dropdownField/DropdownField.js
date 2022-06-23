import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Style from "./DropdownField.module.scss";
import PropTypes from "prop-types";
import {
  errorsSelector,
  formValuesSelector,
  setField,
} from "../../utils/store/store";
import { useDispatch, useSelector } from "react-redux";

/**
 * It renders a label, a dropdown, and an error message for a dropdown field
 * @returns A dropdown field with a label, name, and options.
 */
const DropdownField = ({ label, name, options }) => {
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);
  const errors = useSelector(errorsSelector);

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
        data-testid={name}
        placeholder={`Select a ${name}`}
        options={options}
        onChange={handleChange}
        controlClassName={Style.field}
        value={formValues[name]}
      />
      {errors[name] && <p className="text-danger">{errors[name]}</p>}
    </div>
  );
};

DropdownField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default DropdownField;
