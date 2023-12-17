import React, { useReducer } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

const reducer = (availableTimes, updateTimes) => {
    if (updateTimes.type === "") return {};
    return availableTimes;
}

const Booking = () => {

    const initializeTimes =
        [
            { time: '17:00', status: 'available' },
            { time: '18:00', status: 'available' },
            { time: '19:00', status: 'available' },
            { time: '20:00', status: 'available' },
            { time: '21:00', status: 'available' },
        ];

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes);

    const updateTimes = () => {
        return (
            { availableTimes }
        );
    };//will handle the state change

    return (
        <>
            <Header />
            <div class="container"><h1 className="booking-table">Booking a Table</h1>
                <Form availableTimes={availableTimes} /></div>
            <Footer />
        </>
    )
};

export default Booking;