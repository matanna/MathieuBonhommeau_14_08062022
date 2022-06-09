import React from "react";
import PropTypes from "prop-types";
import Style from "./Header.module.scss";
import logo from "../../assets/logo.png";
import rightArrow from "../../assets/right-arrow.png";
import leftArrow from "../../assets/left-arrow.png";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
  const pathname = useLocation().pathname;

  return (
    <header className={Style.header}>
      <div className={Style.logo}>
        <img src={logo} alt="Wealth Health logo" />
      </div>
      <h1>HRnet</h1>
      <nav>
        {pathname === "/" ? (
          <NavLink to="/list" className={Style.link}>
            Employee list
            <img src={rightArrow} alt="arrow" />
          </NavLink>
        ) : (
          <NavLink to="/" className={Style.link}>
            <img src={leftArrow} alt="arrow" />
            Home
          </NavLink>
        )}
      </nav>
    </header>
  );
};

Header.propTypes = {};

export default Header;
