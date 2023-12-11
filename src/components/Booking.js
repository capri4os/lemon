import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const Booking = () => {
    return (
        <>
            <Header />
            <div class="container"><h1 className="booking-table">Booking a Table</h1>
                <Form /></div>
            <Footer />
        </>
    )
};

export default Booking;