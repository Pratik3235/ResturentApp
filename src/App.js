import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1rem", width: "200px", borderRight: "1px solid #ccc" }}>
          <ul>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/booking">Booking</Link></li>
          </ul>
        </nav>
        <main style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/booking" element={<div>Booking Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;