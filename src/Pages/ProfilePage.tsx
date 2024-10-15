import React, { useEffect, useState } from "react";
import { Movie } from "../types";
import MovieCard from "../Components/MovieCard";
import { Grid, Box, Typography } from "@mui/material";

const ProfilePage: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites") || "[]";
    setFavorites(JSON.parse(savedFavorites));
  }, []);

  return (
    <Box sx={{ padding: 4, backgroundColor: "#1B1A55" }}>
      {" "}
      <Typography variant="h4" gutterBottom color="White" textAlign={"center"}>
        Favorite Movies
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} onAddFavorite={() => {}} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6" align="center">
              No favorite movies found.
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ProfilePage;
