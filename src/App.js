import "./App.css";
import React from "react";
import Row from "./Row";
import request from "./request"
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={request.fetchNetflixOriginals} />
			<Row title="Trending" fetchUrl={request.fetchTrending} />
			<Row title="Top Rated" fetchUrl={request.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
{/* 
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={request.fetchNetflixOriginals}
      /> */}
      {/* <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Trending Movies" fetchUrl={request.fetchTrendingMovies} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Popular Tv Shows" fetchUrl={request.fetchPopularTvShows} />
      <Row title="Latest Movies" fetchUrl={request.fetchUpcoming} />
      <Row title="Top Rated Tv Shows" fetchUrl={request.fetchTopRatedTvShows} />
      <Row title="Popular Movies" fetchUrl={request.fetchPopularMovies} /> */}
    
    
    </div>
  );
}

export default App;
