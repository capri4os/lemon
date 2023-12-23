import React from "react";
import { useState } from "react";

const Form = (props) => {
    const [form, setForm] = useState(
        {
            date: "",
            time: "",
            guests: "",
            occasion: ""
        }
    );

    const handleDateChange = (e) => {
        setForm({
            ...form,
            date: e.target.value
        });
    };

    const handleTimeChange = (e) => {
        setForm({
            ...form,
            time: e.target.value
        });
    };

    const handleGuestsChange = (e) => {
        setForm({
            ...form,
            guests: e.target.value
        });
    };

    const handleOccasionChange = (e) => {
        setForm({
            ...form,
            occasion: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        setForm(
            {
                date: "",
                time: "",
                guests: "",
                occasion: ""
            }
        )
    };

    return (
        <form onSubmit={handleSubmit} className="booking__form">
            <label htmlFor="date" className="booking__form__label">Choose Date</label>
            <input
                className="booking__form__input"
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleDateChange} />
            <label htmlFor="time" className="booking__form__label">Choose Time</label>
            <select
                className="booking__form__select"
                id="time"
                type="text"
                name="time"
                value={form.time}
                onChange={handleTimeChange}>
                {props.availableTimes.map((timeObj, index) => (
                    <option key={index} value={timeObj.time}>
                        {timeObj.time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests" className="booking__form__label">Number of Guests</label>
            <input
                className="booking__form__input"
                id="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                name="guests"
                value={form.guests}
                onChange={handleGuestsChange}
            />
            <label htmlFor="occasion" className="booking__form__label">Occasion</label>
            <select
                className="booking__form__select"
                id="occasion"
                type="text"
                name="occasion"
                value={form.occasion}
                onChange={handleOccasionChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button
                type="submit" className="booking__form__btn"
            >Make Your Reservation</button>
        </form>
    )
};

export default Form;
