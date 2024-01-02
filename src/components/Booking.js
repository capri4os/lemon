import React from "react";
// import React, { useEffect, useReducer, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

// const timeReducer = (availableTimes, action) => {
//     switch (action.type) {
//         case "updatetime":
//             return action.payload;
//         default:
//             return availableTimes;
//     }
// };

const Booking = () => {
    const availableTimes = [
        { time: "17:00", status: "available" },
        { time: "18:00", status: "available" },
        { time: "19:00", status: "available" },
        { time: "20:00", status: "available" },
        { time: "21:00", status: "available" },
    ];

    // const initializeTimes =
    //     [
    //         { time: "17:00", status: "available" },
    //         { time: "18:00", status: "available" },
    //         { time: "19:00", status: "available" },
    //         { time: "20:00", status: "unavailable" },
    //         { time: "21:00", status: "available" },
    //     ];

    // const [availableTimes, dispatch] = useReducer(timeReducer, initializeTimes);
    // const [currentDate, setCurrentDate] = useState(new Date());

    // useEffect(() => {
    //     const updateTimes = () => {
    //         const updatedTimes = initializeTimes.map(timeSlot => ({
    //             ...timeSlot,
    //             status: timeSlot.time.startsWith(currentDate.getHours().toString()) ? "available" : "unavailable"
    //         }));
    //         dispatch({ type: "updatetime", payload: updatedTimes });
    //     };
    //     updateTimes();
    // }, [currentDate]);

    // const submitForm = () => {
    //     submitAPI(formData); // If the submitAPI(formData) API call returns true, navigate to the booking confirmed page.
    // }

    return (
        <>
            <Header />
            <div className="container"><h1 className="booking__heading">Booking a Table</h1>
                <Form availableTimes={availableTimes} /></div>
            {/* <Form availableTimes={availableTimes} updateTimes={dispatch} /></div> */}
            <Footer />
        </>
    )
};

export default Booking;