import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

export default function Movies() {
  const location = useLocation()
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [movieName, setMovieName] = useState(() => {
    return localStorage.getItem('movieName') ?? ''});
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate()


  const onChange = e => {
  setQuery(e.target.value.trim());
    
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      toast.error('Write down the name of movie');
      return;
    }
    if (query === movieName) {
        toast.warning('You have it right now');
        setQuery('');
      return;
    }
    setMovies([]);
    setMovieName(query);
    navigate({ ...location, search: `?query=${query}` })
    setQuery('');
    
    
  };



  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setStatus('pending');

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9b291062862b0555a44c1b18eda11364&query=${movieName}&language=en-US&page=1&include_adult=false`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(movies => setMovies(movies.results))
      .catch(error => {
        setStatus('rejected');
        console.log(error);
      });
    setStatus('successful');
    localStorage.setItem('movieName',JSON.stringify(movieName) )
  }, [movieName]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={onChange}
          value={query}
        />
        <button type="submit">Search</button>
          </form>
          
          {status === 'successful' && (
              <ul>
                  {movies.map(movie => (
                      <li key={movie.id}>
                      <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
                      </li>
                  ))}
              </ul>
          )}
          <ToastContainer />
    </>
  );
}
