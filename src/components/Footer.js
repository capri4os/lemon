import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/little-lemon-logo.svg";


const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__nav container">
                <img className="footer__logo" src={logo} alt="Little Lemon Logo"></img>
                <ul className="footer__nav__list">
                    <li className="footer__nav__heading">Doormat Navigation</li>
                    <Link to="/"><li className="footer__nav__item">Home</li></Link>
                    <Link to="/#about"><li className="footer__nav__item">About</li></Link>
                    <Link to="/#menu"><li className="footer__nav__item">Menu</li></Link>
                    <Link to="/booking"><li className="footer__nav__item">Reservations</li></Link>
                    <Link to="/delivery"><li className="footer__nav__item footer__nav__item_highlighted">Order Online</li></Link>
                </ul>
                <ul className="footer__nav__list">
                    <li className="footer__nav__heading">Contact</li>
                    <li className="footer__nav__item">Chicago, 1803 Pinewood Drive</li>
                    <li className="footer__nav__item">(+1 312) 803-0095</li>
                    <li className="footer__nav__item">order@lemon.com</li>
                </ul>
                <ul className="footer__nav__list">
                    <li className="footer__nav__heading">Social Media Links</li>
                    <Link to="https://www.facebook.com/" target="_blank"><li className="footer__nav__item">Facebook</li></Link>
                    <Link to="https://www.instagram.com/" target="_blank"><li className="footer__nav__item">Instagram</li></Link>
                    <Link to="https://t.me/telegram" target="_blank"><li className="footer__nav__item">Telegram</li></Link>
                </ul>
            </nav>
        </footer>
    )
};

export default Footer;