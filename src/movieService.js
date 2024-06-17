const API_KEY = "fb9015af";
const BASE_URL = "https://www.omdbapi.com/";

const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.Response === "False") {
      throw new Error(data.Error);
    }
    return data.Search;
  } catch (error) {
    console.error("Fetch movies failed:", error);
    return [];
  }
};

export const searchMovies = (query) => fetchMovies(query);