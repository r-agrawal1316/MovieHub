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
import { useNavigate } from "react-router-dom";
import { login } from "../Backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = login(email, password);
    if (user) {
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: "#2196f3" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, backgroundColor: "#fff8e1" }}>
          <Typography
            component="h1"
            variant="h4"
            textAlign="center"
            gutterBottom
          >
            MovieHub
          </Typography>
          <Typography component="h1" variant="h5" textAlign="center">
            Login
          </Typography>
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
      <ToastContainer />
    </Box>
  );
}

export default Login;
