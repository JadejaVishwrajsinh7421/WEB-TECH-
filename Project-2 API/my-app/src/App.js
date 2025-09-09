import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from ".components/pages/Home";
import About from ".components/pages/About";
import MovieDetail from ".components/pages/MovieDetail";
import ReleaseCalendar from ".components/pages/ReleaseCalendar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/release-calendar" element={<ReleaseCalendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
