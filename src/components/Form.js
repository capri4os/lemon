import React from "react";
import { useState } from "react";

const Form = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setDate("");
        setTime("");
        setGuests("1");
        setOccasion("");
    }

    return (
        <form onSubmit={handleSubmit} className="booking__form">
            <label htmlFor="date">Choose Date</label>
            <input
                id="date"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="time">Choose Time</label>
            <select
                id="time"
                type="text"
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input
                id="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                name="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                type="text"
                name="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button
                type="submit"
            >Make Your Reservation</button>
        </form>
    )
};

export default Form;
