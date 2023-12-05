import React from "react";
import restraunt from "../images/restraunt.jpeg";
import marioadrian from "../images/mario-and-adrian.jpg";

const About = () => {
    return (
        <section className="about container">
            <h2 className="about__h2">Little Lemon</h2>
            <div className="about__part">
                <div className="about__part__1"><h3 className="about__h3">Chicago</h3>
                    <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                <div className="about__part__2">
                    <img className="about__img_1" src={restraunt}></img>
                    <img className="about__img_2" src={marioadrian}></img></div>
            </div>
        </section >
    )
};

export default About;