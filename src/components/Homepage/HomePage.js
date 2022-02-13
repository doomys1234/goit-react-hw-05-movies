import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  

  useEffect(() => {
  
  
  fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=9b291062862b0555a44c1b18eda11364`).then(response=>response.json()).then(data=>setTrendingMovies(data.results))

  
}, []);


  return (
    <>
      <h2>Trending Movies</h2>
      {trendingMovies && (
        <ul>
        {trendingMovies.map(movie => {
            return <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title ?? movie.name}</Link>
            </li>
          })}
        </ul>
      )}
      </>

    )
}