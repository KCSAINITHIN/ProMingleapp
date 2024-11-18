import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import Groups from "./pages/Groups";
import About from "./pages/About";
import LocationPoll from "./components/LocationPoll";
import FinalizedLocation from "./components/FinalizedLocation";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/about" element={<About />} />
        <Route path="/poll/:groupId" element={<LocationPoll />} />
        <Route path="/finalized/:groupId" element={<FinalizedLocation />} />
      </Routes>
    </Router>
  );
};

export default App;
