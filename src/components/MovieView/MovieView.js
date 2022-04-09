import { lazy } from "react";
import { useState, useEffect, useRef } from "react";
import { useParams, Link, Routes, Route, useLocation } from "react-router-dom";
import noPoster from '../../img/no-poster.jpeg'


import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

export default function MovieView() {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()
    const location = useLocation()
   
    const navigatePath = useRef(location)

    
   
    
    
    
    
   useEffect(() => {
     fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9b291062862b0555a44c1b18eda11364&language=en-US`).then(response=>response.json()).then(movie=>setMovie(movie))
   
     
   }, [movieId]);

   
   


    return (
        <>
            <button type="button"><Link to={navigatePath.current?.state?.from ?? `/`} state={{ from: navigatePath.current }}>Go Back</Link></button>
            {movie && (
                <div>
                    <img src={movie.poster_path ?`https://image.tmdb.org/t/p/w300/${movie.poster_path}`: noPoster} alt='movie poster'/>
            
            <div>
                <h2>{movie.original_title}</h2>
                        <p>User Score:{Math.round(movie.popularity)}%</p>
                <h3>Overview</h3>
                        <p>{movie.overview}</p>
                <h3>Genres</h3>
                        {movie.genres && (
                            <ul>
                                {movie.genres.map(genre => (<li key={genre.id}>{genre.name}</li>)) }
                            </ul>
                        )}
                        <Link to={`movies/${movie.id}/cast`}>Cast</Link>
                        <Link to={`movies/${movie.id}/reviews`}>Reviews</Link>
                    </div>
                    <Routes>
                        <Route path={`movies/:movieId/cast`} element={<Cast />} />
                        <Route path={`movies/:movieId/reviews`} element={<Reviews/>}/>
                    </Routes>
                    
        </div>
            )}
        </>
    )
}