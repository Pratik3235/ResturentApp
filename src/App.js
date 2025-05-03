import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Booking from "./components/Booking";
import DisplayResturent from "./components/DisplayResturent";
import SettingPage from "./components/SettingPage";

function App() {
  const [resturent, setResturent] = useState([{ resturent: "Taj", bookingCount: 0, isAvaliable: true }, { resturent: "Maharaj", bookingCount: 0, isAvaliable: true }])
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1rem", width: "200px", borderRight: "1px solid #ccc" }}>
          <ul>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </nav>
        <DisplayResturent />
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/settings" element={<SettingPage/>} />
            <Route path="/booking" element={<Booking prop={{resturent,setResturent}} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;