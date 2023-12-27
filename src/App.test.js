import { render, screen } from "@testing-library/react";
import App from "./App";
import Form from "./components/Form";
import Booking from "./components/Booking";

test("Renders the BookingForm Heading", () => {
  render(<Booking />);
  const headingElement = screen.getByText("Booking a Table");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the Initial Time Slots", () => {
  render(<Form />);
  const listElements = screen.getByText("17:00" & "18:00" & "19:00" & "20:00" & "21:00");
  expect(listElements).toBeInTheDocument();
});

// test("Renders Updated Times Depending from Date", (props) => {
//   render(<Form />);
//   const updatedTimes = screen.getByText("");
//   expect(updatedTimes).toBeInTheDocument();
// });
