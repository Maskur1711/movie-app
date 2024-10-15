import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
  onAddFavorite: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onAddFavorite }) => {
  return (
    <Card
      sx={{
        width: 350,
        margin: 2,
        textAlign: "start",
        boxShadow: 3,
        transition: "transform 0.2s",
        "&:hover": { transform: "scale(1.05)" },
        backgroundColor: "#535C91",
        color: "#fff",
        minHeight: "300px",
      }}
    >
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{
          height: 400,
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {movie.title}
        </Typography>
        <Box display="flex" justifyContent="end" alignItems="center">
          <Button
            variant="contained"
            onClick={() => onAddFavorite(movie)}
            sx={{
              marginTop: 2,
              backgroundColor: "#4477CE",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#355F9C",
              },
            }}
          >
            Add to Favorite
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
