import React, { useState, useEffect } from "react";
import instance from "./axios";
import request from "./request";
import "./banner.css";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await instance.get(request.fetchNetflixOriginals);

      console.log(request.data);
      setMovies(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return requests;
    }
    fetchData();
  }, []);

  console.log(movies);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) +"..." :  str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* title */}
        <h1
          className="banner__title"
        >
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movies?.overview, 150)}</h1>
      
      </div>
      <div className="banner__fadeButton">
          
          </div>

      {/* two buttons */}
      {/* {description} */}
    </header>
  );
}

export default Banner;
