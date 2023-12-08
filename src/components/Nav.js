import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/little-lemon-logo.svg";

const Nav = () => {
    return (
        <nav className="header__menu">
            <img className="header__logo" src={logo} alt="Little Lemon Restraunt"></img>
            <ul className="header__menu-list">
                <Link to="/"><li className="header__menu-list__item">Home</li></Link>
                <Link to="/#about"><li className="header__menu-list__item">About</li></Link>
                <Link to="/#menu"><li className="header__menu-list__item">Menu</li></Link>
                <Link to="/booking"><li className="header__menu-list__item">Reservations</li></Link>
                <Link to="/delivery"><li className="header__menu-list__item">Order online</li></Link>
                <Link to="/#"><li className="header__menu-list__item">Login</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;