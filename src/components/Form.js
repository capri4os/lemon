import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Form = (props) => {

    const [form, setForm] = useState(
        {
            date: "",
            time: "",
            guests: "",
            occasion: ""
        }
    );

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const formValues = Object.values(form);
        const allFieldsFilled = formValues.every(value => value !== "");
        setIsValid(allFieldsFilled);
    }, [form]);

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
        <form onSubmit={handleSubmit} className="booking__form" method="post">
            <label htmlFor="date" className="booking__form__label">Choose Date</label>
            <input
                className="booking__form__input"
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={handleDateChange}
                required />
            <label htmlFor="time" className="booking__form__label">Choose Time</label>
            <select
                className="booking__form__select"
                id="time"
                type="text"
                name="time"
                value={form.time}
                onChange={handleTimeChange}
                required>
                {props.availableTimes.map((timeObj, index) => (
                    <option
                        key={index}
                        value={timeObj.time}>
                        {timeObj.time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests" className="booking__form__label">Number of Guests</label>
            <input
                className="booking__form__input"
                id="guests"
                type="number"
                placeholder="2"
                min="1"
                max="10"
                name="guests"
                value={form.guests}
                onChange={handleGuestsChange}
                required
            />
            <label htmlFor="occasion" className="booking__form__label">Occasion</label>
            <select
                className="booking__form__select"
                id="occasion"
                type="text"
                name="occasion"
                value={form.occasion}
                onChange={handleOccasionChange}
                required>
                <option>Date</option>
                <option >Birthday</option>
                <option>Anniversary</option>
            </select>
            <Link to="/confirmed-booking">
                <button
                    type="submit"
                    className="booking__form__btn"
                    disabled={!isValid}
                >Make Your Reservation</button>
            </Link>
        </form>
    )
};

export default Form;