import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "../src/Components/Login";
import Register from "../src/Components/Register";
import Home from "../src/Components/Home";
import { CssBaseline, Typography, Box, Container } from "@mui/material";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Container component="main" maxWidth="xs">
        <Box mt={2}>
          <Typography variant="body2" align="center">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>{" "}
            |{" "}
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Container>
    </Router>
  );
}

export default App;