import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Booking from "./components/Booking";
import Delivery from "./components/Delivery";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>
    </>
  )
}

export default App;