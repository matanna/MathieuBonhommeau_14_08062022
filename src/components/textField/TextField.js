import React from "react";
import PropTypes from "prop-types";
import Style from "./TextField.module.scss";

const TextField = ({ name, label, type }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {type === "number" ? (
        <input name={name} id={name} type={type} min="0" />
      ) : (
        <input name={name} id={name} type={type} />
      )}
    </div>
  );
};

TextField.propTypes = {};

export default TextField;
