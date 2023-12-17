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
    }

    return (
        <form onSubmit={handleSubmit} className="booking__form">
            <label htmlFor="date">Choose Date</label>
            <input
                id="date"
                type="date"
                name="date"
                value={form.date}
                onChange={(e) => ({
                    ...form,
                    date: e.target.value
                })
                } />
            <label htmlFor="time">Choose Time</label>
            <select
                id="time"
                type="text"
                name="time"
                value={form.time}
                onChange={(e) => ({
                    ...form,
                    time: e.target.value
                })
                }>
                {props.availableTimes.map((timeObj, index) => (
                    <option key={index} value={timeObj.time}>
                        {timeObj.time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input
                id="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                name="guests"
                value={form.guests}
                onChange={(e) => ({
                    ...form,
                    guests: e.target.value
                })}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                type="text"
                name="occasion"
                value={form.occasion}
                onChange={(e) => ({
                    ...form,
                    occasion: e.target.value
                })}>
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
