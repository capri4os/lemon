import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const ConfirmedBooking = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="confirmation__heading">Your Booking is successfully confirmed!</h1>
            </div>
            <Footer />
        </>
    )
};

export default ConfirmedBooking;