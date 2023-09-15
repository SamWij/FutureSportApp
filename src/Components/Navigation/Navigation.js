import React from 'react';
import navStyles from './nav.module.css'
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/logo.svg';


const NavigationBar = () => {

  return (
    <div className={navStyles.navContainer}>
      <div>
        <a className={navStyles.logo} href="/"><img src={Logo} /> </a>
      </div>
      <nav className={navStyles.navLinkContainer}>
        <NavLink className={navStyles.navLink} to="/AboutUs"> About </NavLink>
        <NavLink className={navStyles.navLink} to="/Sponsorship"> Sponsorship </NavLink>
        <NavLink className={navStyles.navLink} to="/Schools"> School Programs </NavLink>
        <NavLink className={navStyles.navLink} to="/Fixture"> Fixture </NavLink>
        <NavLink className={navStyles.navLink} to="/Training"> Training </NavLink>
        <NavLink className={navStyles.navLink} to="/Fees"> Fees </NavLink>
        <NavLink className={navStyles.navLink} to="/ContactUs"> Contact Us </NavLink>
        <NavLink className={navStyles.navLink} to="Join"> Join </NavLink>
      </nav>
    </div>
  );
};

export default NavigationBar;

