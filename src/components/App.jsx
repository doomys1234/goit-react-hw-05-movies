import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/HomePage";
import Movies from "./Movies/Movies";
import MovieView from "./MovieView/MovieView";
import Navigation from "./Navigation/Navigation";
export const App = ()=>{
  return (
    <>
      <Navigation/>
        <Routes>
       <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId/*' element={<MovieView />} />
     </Routes>
    </>
   
    
  );
};
