// import React from 'react';

const API_KEY = "17e44d5b40bd9ea93762fab5d366c3d9";

// const request = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchUpcoming: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchTrendingMovies: `/trending/all/day?api_key=${API_KEY}`,
//   fetchPopularTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
//   fetchTopRatedTvShows: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  
// };

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
};

export default requests;