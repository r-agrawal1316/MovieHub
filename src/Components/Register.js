import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../Backend";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    register({ username, email, password });
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AppBar position="fixed" sx={{ backgroundColor: "#2196f3" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <div>
              <Typography
                component="h1"
                variant="h4"
                sx={{ textAlign: "center", marginTop: "10px" }}
              >
                MovieHub
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ textAlign: "center", marginBottom: "10px" }}
              >
                Welcome to Movie Hub - Explore and Enjoy Movies
              </Typography>
            </div>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <Container component="main" maxWidth="xs">
          <Paper elevation={3} sx={{ padding: 4, backgroundColor: "#fff8e1" }}>
            <Typography component="h1" variant="h5" align="center" gutterBottom>
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default Register;
