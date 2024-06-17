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
} from "@mui/material";
import { searchMovies } from "../movieService";
// import { AuthContext } from "./AuthContext";

const MovieCard = ({ movie }) => (
  <Card>
    <CardMedia
      component="img"
      height="300"
      image={movie.Poster}
      alt={movie.Title}
    />
    <CardContent>
      <Typography variant="h6">{movie.Title}</Typography>
      <Typography variant="body2" color="textSecondary">
        {movie.Year}
      </Typography>
    </CardContent>
  </Card>
);

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  // const { logout } = React.useContext(AuthContext);

  const fetchMovies = async (query) => {
    setLoading(true);
    const result = await searchMovies(query);
    setMovies(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies("popular");
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      fetchMovies(query.trim());
    }
  };

  // const handleLogout = () => {
  //   logout();
  //   window.location.href = "/login";
  // };

  return (
    <Container component="main">
      <Box mt={3} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Welcome to Movie Hub
        </Typography>
        <Button variant="contained" color="primary" onClick={ ()=> {}}>
          Logout
        </Button>
      </Box>
      <Box mt={3} textAlign="center">
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
        <Box mt={3} textAlign="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3} mt={3}>
          {movies.map((movie) => (
            <Grid item key={movie.imdbID} xs={12} sm={6} md={4}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default Home;