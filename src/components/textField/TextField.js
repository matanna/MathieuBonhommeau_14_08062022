import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  errorsSelector,
  formValuesSelector,
  setField,
} from "../../utils/store/store";

/**
 * It renders a label, an input, and an error message for a text field or a numeric field
 * @returns A functional component that returns a div with a label, input, and error message.
 */
const TextField = ({ name, label, type }) => {
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);
  const errors = useSelector(errorsSelector);

  const handleChange = (e) => {
    dispatch(
      setField({
        name: e.target.id,
        value: e.target.value,
      })
    );
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {type === "number" ? (
        <input
          name={name}
          id={name}
          type={type}
          min="0"
          onChange={handleChange}
          value={formValues[name]}
        />
      ) : (
        <input
          name={name}
          id={name}
          type={type}
          onChange={handleChange}
          value={formValues[name]}
        />
      )}
      {errors[name] && <p className="text-danger">{errors[name]}</p>}
    </div>
  );
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default TextField;
