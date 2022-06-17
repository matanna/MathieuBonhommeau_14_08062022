import React, { useEffect, useRef, useState } from "react";
import Style from "./DateField.module.scss";
import PropTypes from "prop-types";
import { formValuesSelector, setField } from "../../utils/store/store";
import { useDispatch, useSelector } from "react-redux";

const DateField = ({ label, name }) => {
  const dispatch = useDispatch();

  const formValues = useSelector(formValuesSelector);

  const handleChange = (e) => {
    dispatch(
      setField({
        name: name,
        value: e.target.value,
      })
    );
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {/*<DatePicker id={name} onChange={handleChange} value={formValues[name]} />*/}
      <input
        className={Style.input}
        type="date"
        id={name}
        value={formValues[name]}
        onChange={handleChange}
      />
    </div>
  );
};

DateField.propTypes = {};

export default DateField;
