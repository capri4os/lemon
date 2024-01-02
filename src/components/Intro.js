import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import image from "../images/intro-img.jpg";

const Intro = () => {
    return (
        <div className="intro__bgr">
            <section className="intro container">
                <div className="intro__left-part">
                    <h1 className="intro__h1">Little Lemon</h1>
                    <h2 className="intro__h2">Chicago</h2>
                    <p className="intro__text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking"><button
                        className="intro__btn"
                        aria-label="Reserve a Table"
                    >Reserve a Table</button></Link>
                </div>
                <div>
                    <img src={image} className="intro__img" alt="Welcome to Little Lemon Restraunt"></img>
                </div>
            </section >
        </div>
    )
};

export default Intro;