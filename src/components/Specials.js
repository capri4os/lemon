import React from "react";
import { Link } from "react-router-dom";
import salad from "../images/greek-salad.jpg";
import brushetta from "../images/bruchetta.svg";
import dessert from "../images/lemon-dessert.jpg";

const Specials = () => {
    return (
        <section className="specials container" id="menu">
            <div className="specials__heading-part">
                <h2 className="specials__h2">Specials</h2>
                <Link to="/delivery"><button className="specials__btn">Online Menu</button></Link>
            </div>
            <div className="specials__cards">
                <div className="specials__card">
                    <img className="specials__card__img" src={salad}></img>
                    <div className="specials__card__heading__part">
                        <h3 className="specials__card__h3">Greek Salad</h3>
                        <p className="specials__card__price">$12.99</p>
                    </div>
                    <p className="specials__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a className="specials__card__link">Order Delivery</a>
                </div>
                <div className="specials__card">
                    <img className="specials__card__img" src={brushetta}></img>
                    <div className="specials__card__heading__part">
                        <h3 className="specials__card__h3">Brushetta</h3>
                        <p className="specials__card__price">$7.99</p>
                    </div>
                    <p className="specials__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a className="specials__card__link">Order Delivery</a>
                </div>
                <div className="specials__card">
                    <img className="specials__card__img" src={dessert}></img>
                    <div className="specials__card__heading__part">
                        <h3 className="specials__card__h3">Lemon Pie</h3>
                        <p className="specials__card__price">$10.99</p>
                    </div>
                    <p className="specials__card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <a className="specials__card__link">Order Delivery</a>
                </div>
            </div>
        </section>
    )
};

export default Specials;