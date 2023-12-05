import React from "react";
import alex from "../images/alex.jpg";
import elisa from "../images/elisa.jpg";
import lara from "../images/lara.jpg";
import emma from "../images/emma.png";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <h2 className="testimonials_h2">Testimonials</h2>
            <div className="testimonials__cards container">
                <div className="testimonials__card">
                    <img className="testimonials__card__img" src={alex}></img>
                    <h6 className="testimonials__card__name">Alex</h6>
                    <p className="testimonials__card__text">So tasty! I order bruschetta every week!</p>
                </div>
                <div className="testimonials__card">
                    <img className="testimonials__card__img" src={elisa}></img>
                    <h6 className="testimonials__card__name">Elisa</h6>
                    <p className="testimonials__card__text">Peaceful place, ideal for families with children.</p>
                </div>
                <div className="testimonials__card">
                    <img className="testimonials__card__img" src={lara}></img>
                    <h6 className="testimonials__card__name">Lara</h6>
                    <p className="testimonials__card__text">Easy to order online!</p>
                </div>
                <div className="testimonials__card">
                    <img className="testimonials__card__img" src={emma}></img>
                    <h6 className="testimonials__card__name">Emma</h6>
                    <p className="testimonials__card__text">Love to spend my time with friends here.</p>
                </div>
            </div>
        </section>
    )
};

export default Testimonials;