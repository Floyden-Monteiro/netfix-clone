import React, { useState, useEffect } from "react";
// import axios from "axios";
import instance from "./axios";
import "./row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  console.log(movies);

  // const handleClick = (movie) => {
  //     if(trailerUrl){
  //       setTrailerUrl('');
  //     }else {
  //       movieTrailer(movie?.name || '')
  //       .then((url) =>{
  //           const urlParam = new URLSearchParams( new URL(url).search);
  //           // console.log(urlParam)
  //           setTrailerUrl(urlParam.get('v'));
  //       }).catch((error) => console.log(error))
  //     }
      
  // }
  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }
console.log(trailerUrl)
  return (
    <div className="row">
      {/* {title} */}
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
          
            key={movie.id}
            onClick = {() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={` ${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
