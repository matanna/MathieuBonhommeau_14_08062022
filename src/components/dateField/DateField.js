import React from "react";
import Style from "./DateField.module.scss";
import PropTypes from "prop-types";
import {
  errorsSelector,
  formValuesSelector,
  setField,
} from "../../utils/store/store";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

/**
 * It renders a label, an input, and an error message for a date field
 * @returns A component that renders a label, input and error message.
 */
const DateField = ({ label, name }) => {
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);
  const errors = useSelector(errorsSelector);

  const handleChange = (e) => {
    dispatch(
      setField({
        name: name,
        value: moment(e).format("YYYY-MM-DD"),
      })
    );
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {/*<input
        className={Style.input}
        type="date"
        id={name}
        value={formValues[name]}
        onChange={handleChange}
      />*/}
      <DatePicker
        //className={Style.input}
        type="date"
        id={name}
        value={formValues[name]}
        onChange={handleChange}
      />
      {errors[name] && <p className="text-danger">{errors[name]}</p>}
    </div>
  );
};

DateField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DateField;
