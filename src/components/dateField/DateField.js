import React from "react";
import Style from "./DateField.module.scss";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = ({ label, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <DatePicker id={name} />
    </div>
  );
};

DateField.propTypes = {};

export default DateField;
