import React from "react";
import PropTypes from "prop-types";
import Style from "./TextField.module.scss";
import { useDispatch } from "react-redux";
import { setField } from "../../utils/redux/store";

const TextField = ({ name, label, type }) => {
  const dispatch = useDispatch();

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
        />
      ) : (
        <input name={name} id={name} type={type} onChange={handleChange} />
      )}
    </div>
  );
};

TextField.propTypes = {};

export default TextField;
