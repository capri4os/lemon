import React from "react";
import Intro from '../components/Intro';
import Specials from '../components/Specials';
import Testimonials from './Testimonials';
import About from '../components/About';

const Main = () => {
    return (
        <main>
            <Intro />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
};

export default Main;