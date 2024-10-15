import React, { useEffect, useState } from "react";
import { getNowPlayingMovies, getPopularMovies } from "../Api/tmdbAPI";
import { Movie } from "../types";
import MovieCard from "../Components/MovieCard";
import { Button, Grid, Box, Typography } from "@mui/material";

const MainPage: React.FC = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [displayedPopularCount, setDisplayedPopularCount] = useState(6);
  const totalPopularCount = 30;
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNowPlaying = async () => {
      const movies = await getNowPlayingMovies(6);
      setNowPlaying(movies);
    };
    fetchNowPlaying();
  }, []);

  useEffect(() => {
    const fetchPopular = async () => {
      const movies = await getPopularMovies(page);
      setPopular((prev) => [...prev, ...movies]);
    };
    fetchPopular();
  }, [page]);

  const loadMore = () => {
    setDisplayedPopularCount((prev) => Math.min(prev + 6, totalPopularCount));
    if (displayedPopularCount + 6 < totalPopularCount) {
      setPage((prev) => prev + 1);
    }
  };

  const addFavorite = (movie: Movie) => {
    const favorites = localStorage.getItem("favorites") || "[]";
    const updatedFavorites = [...JSON.parse(favorites), movie];
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#1B1A55",
        minHeight: "100vh",
        color: "White",
        alignContent: "center"
      }}
    >
      <Typography variant="h2" align="center" gutterBottom>
        Now Playing
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {nowPlaying.map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} onAddFavorite={addFavorite} />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{ marginTop: 4 }}
      >
        Popular Movies
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {popular.slice(0, displayedPopularCount).map((movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <MovieCard movie={movie} onAddFavorite={addFavorite} />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        {displayedPopularCount < totalPopularCount && (
          <Button variant="contained" onClick={loadMore}>
            Load More
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MainPage;
