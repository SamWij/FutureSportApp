import React from 'react';
import navStyles from './nav.module.css'
import { Link } from "react-router-dom";
import Logo from '../../Assets/logo.svg';


const NavigationBar = () => {

  return (
    <div className={navStyles.navContainer}>
      <div>
        <a className={navStyles.logo} href="/"><img src={Logo} /> </a>
      </div>
      <nav className={navStyles.navLinkContainer}>
        <Link className={navStyles.navLink} to="/AboutUs"> About </Link>
        <Link className={navStyles.navLink} to="/Sponsorship"> Sponsorship </Link>
        <Link className={navStyles.navLink} to="/Schools"> School Programs </Link>
        <Link className={navStyles.navLink} to="/Fixture"> Fixture </Link>
        <Link className={navStyles.navLink} to="/Training"> Training </Link>
        <Link className={navStyles.navLink} to="/Fees"> Fees </Link>
        <Link className={navStyles.navLink} to="/ContactUs"> Contact Us </Link>
        <Link className={navStyles.navLink} to="Join"> Join </Link>
      </nav>
    </div>
  );
};

export default NavigationBar;

