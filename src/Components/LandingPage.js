import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#2196f3" }}>
        <Toolbar sx={{ justifyContent: "center" }}>
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
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "91vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          padding: 3,
        }}
      >
        <Container component="main" maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            sx={{ color: "black" }}
            variant="h2"
            component="h1"
            gutterBottom
          >
            Welcome to MovieHub
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="h5"
            component="p"
            gutterBottom
          >
            Explore and Enjoy Movies Anytime, Anywhere
          </Typography>
          <Box mt={4}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
              sx={{ mr: 2 }}
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/register"
            >
              Register
            </Button>
          </Box>
        </Container>
      </Box>
      <a href="/">learn react</a>
    </>
  );
};

export default LandingPage;