import React from "react";
import logo from "../images/little-lemon-logo.svg";

const Header = () => {
    return (
        <header className="header container">
            <nav className="header__menu">
                <img className="header__logo" src={logo}></img>
                <ul className="header__menu-list">
                    <li className="header__menu-list__item">Home</li>
                    <li className="header__menu-list__item">About</li>
                    <li className="header__menu-list__item">Menu</li>
                    <li className="header__menu-list__item">Reservations</li>
                    <li className="header__menu-list__item">Order online</li>
                    <li className="header__menu-list__item">Login</li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;