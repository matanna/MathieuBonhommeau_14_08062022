import React from "react";
import PropTypes from "prop-types";
import Style from "./TextField.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { formValuesSelector, setField } from "../../utils/redux/store";

const TextField = ({ name, label, type }) => {
  const dispatch = useDispatch();
  const formValues = useSelector(formValuesSelector);

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
    </div>
  );
};

TextField.propTypes = {};

export default TextField;
