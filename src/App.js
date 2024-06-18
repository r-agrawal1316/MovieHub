import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/Components/Login";
import Register from "../src/Components/Register";
import Home from "../src/Components/Home";
import { CssBaseline } from "@mui/material";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;