import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/logo.svg';


const NavigationBar = () => {
  const navContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#051d40',
    padding: '10px 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };



  return (
    <div className={navContainer}>
      <div>
        <a href="/"><img src={Logo} /> </a>
      </div>
      <nav>
        <NavLink className="nav-link" activeClassName="is-active" to="/AboutUs"> About </NavLink>
        <NavLink className="nav-link" activeClassName="is-active" to="/Sponsorship"> Sponsorship </NavLink>
        <NavLink className="nav-link" activeClassName="is-active" to="/Schools"> School Programs </NavLink>
        <NavLink className="nav-link" activeClassName="is-active" to="/Fixture"> Fixture </NavLink>
        <NavLink className="nav-link" activeClassName="is-active" to="/Training"> Training </NavLink>
        <NavLink className="nav-link" activeClassName="is-active" to="/Fees"> Fees </NavLink>
        <NavLink className="nav-link" activeClassName="is-active" to="/ContactUs"> Contact Us </NavLink>
        <NavLink className="navbar-item join" activeClassName="is-active" to="Join"> Join </NavLink>
      </nav>
    </div>
  );
};

export default NavigationBar;

