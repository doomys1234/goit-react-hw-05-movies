import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import noPoster from '../../img/no-poster.jpeg'
export default function Cast() {

    const [cast, setCast] = useState([])
    const {movieId} = useParams()
    
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9b291062862b0555a44c1b18eda11364&language=en-US`).then(response=>response.json()).then(cast=>setCast(cast.cast.slice(0,11)))
        
    }, [movieId])
    
    console.log(cast)
   

    
    
    return (
        <>
            {cast ? (
                <ul>
                    {cast.map(hero => (
                        <li key={hero.id}>
                            <p>{hero.name}</p>
                            <img src={hero.profile_path ? `https://image.tmdb.org/t/p/w92/${hero.profile_path}` : noPoster} alt={hero}/>
                        </li>
                    ))}
                </ul>
        ): <p>No cast available</p>}
        </>
    )
}