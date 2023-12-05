import React from "react";
import logo from "../images/little-lemon-logo.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav container">
                <img className="footer__logo" src={logo}></img>
                <ul className="footer__nav__list">
                    <li className="footer__nav__heading">Doormat Navigation</li>
                    <li className="footer__nav__item">Home</li>
                    <li className="footer__nav__item">About</li>
                    <li className="footer__nav__item">Menu</li>
                    <li className="footer__nav__item">Reservations</li>
                    <li className="footer__nav__item footer__nav__item_highlighted">Order Online</li>
                </ul>
                <ul className="footer__nav__list">
                    <li className="footer__nav__heading">Contact</li>
                    <li className="footer__nav__item">Address</li>
                    <li className="footer__nav__item">Telephone</li>
                    <li className="footer__nav__item">Email</li>
                </ul>
                <ul className="footer__nav__list">
                    <li className="footer__nav__heading">Social Media Links</li>
                    <li className="footer__nav__item">Facebook</li>
                    <li className="footer__nav__item">Instagram</li>
                    <li className="footer__nav__item">Telegram</li>
                </ul>
            </nav>
        </footer>
    )
};

export default Footer;