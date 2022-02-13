import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Reviews() {

    const [reviews, setReviews] = useState([])
    const {movieId} = useParams()
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9b291062862b0555a44c1b18eda11364&language=en-US&page=1`).then(response=>response.json()).then(reviews=> setReviews(reviews.results))

    }, [movieId])
    
    console.log(reviews)
    
    return (
        <div>
         { reviews.length ? (
                <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <span>Author:{review.author}</span>
                            <p>{review.content}</p>
                        </li>
                    ))}    
            </ul>)
           
       : <p>No reviews yet</p>}
        </div>
    )
}