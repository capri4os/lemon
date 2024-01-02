import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Form from "./components/Form";
import Booking from "./components/Booking";
import Main from "./components/Main";

// test("Renders the Heading", () => {
//     render(<App />);
//     const headingElement = screen.getByText("Specials");
//     expect(headingElement).toBeInTheDocument();
// });

// test("Renders the BookingForm Heading", () => {
//     render(<Form />);
//     const headingElement = screen.getByText("Booking a Table");
//     expect(headingElement).toBeInTheDocument();
// });

// test("Renders the Initial Time Slots", () => {
//   render(<Form />);
//   const timeElements = screen.getByLabelText("time");
//   expect(timeElements).toBeInTheDocument();
// });

// // test("Renders Updated Times Depending from Date", (props) => {
// //   render(<Form />);
// //   const updatedTimes = screen.getByText("");
// //   expect(updatedTimes).toBeInTheDocument();
// // });

// describe("Booking Form", () => {
//   test("Submission is disabled until all form fields are filled", () => {
//     const handleSubmit = jest.fn();
//     render(<Form onSubmit={handleSubmit} />)

//     const dateInput = screen.getByLabelText
//   });
// });