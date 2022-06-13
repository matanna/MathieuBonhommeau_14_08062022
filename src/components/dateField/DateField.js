import React, { useEffect, useRef, useState } from "react";
import Style from "./DateField.module.scss";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formValuesSelector, setField } from "../../utils/redux/store";
import { useDispatch, useSelector } from "react-redux";

const DateField = ({ label, name }) => {
  const dispatch = useDispatch();

  const formValues = useSelector(formValuesSelector);

  const handleChange = (e) => {
    console.log(name);
    dispatch(
      setField({
        name: name,
        value: e.toLocaleDateString(),
      })
    );
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <DatePicker id={name} onChange={handleChange} value={formValues[name]} />
    </div>
  );
};

DateField.propTypes = {};

export default DateField;
