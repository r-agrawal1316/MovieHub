import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Box,
  TextField,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { searchMovies } from "../movieService";
import { logout, isAuthenticated } from "../Backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieCard = ({ movie }) => (
  <Card
    sx={{
      maxWidth: 200,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      boxShadow: 1,
      transition: "box-shadow 0.3s ease-in-out",
      "&:hover": {
        boxShadow: 6,
      },
    }}
  >
    <CardMedia
      component="img"
      height="300"
      image={
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/200x300?text=No+Image"
      }
      alt={movie.Title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6" component="h2" sx={{ fontSize: "1rem" }}>
        {movie.Title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {movie.Year}
      </Typography>
    </CardContent>
  </Card>
);

function Home(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login");
    } else {
      fetchMovies("popular");
    }
  }, []);

  const fetchMovies = async (query) => {
    setLoading(true);
    const result = await searchMovies(query);
    setMovies(result);
    setLoading(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      fetchMovies(query.trim());
    }
  };

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#e0f7fa",
        padding: 0,
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
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container component="main">
        <Box mt={7} textAlign="center">
          <form onSubmit={handleSearch}>
            <TextField
              label="Search Movies"
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ width: "300px", mr: 2 }}
            />
            <Button variant="contained" color="primary" type="submit">
              Search
            </Button>
          </form>
        </Box>
        {loading ? (
          <Box mt={4} textAlign="center">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={3} mt={3}>
            {movies.map((movie) => (
              <Grid item key={movie.imdbID} xs={12} sm={6} md={3} lg={2}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <ToastContainer />
    </Box>
  );
}

export default Home;