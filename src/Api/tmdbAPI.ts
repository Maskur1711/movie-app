import axios from "axios";

const API_KEY = "18e5faf58b1d150ed55682ae5852d5ae";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNowPlayingMovies = async (limit: number) => {
  const response = await axios.get(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.slice(0, limit);
};

export const getPopularMovies = async (page: number) => {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  return response.data.results;
};
