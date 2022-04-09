import React from "react";
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
const MovieView = lazy(() => import('./MovieView/MovieView.js' /* webpackChunkname: 'MovieView' */ ));
const Movies = lazy(() => import('./Movies/Movies.js' /* webpackChunkname: 'Movies' */));
const Homepage = lazy(() => import('./Homepage/HomePage.js' /* webpackChunkname: 'HomePage' */));
const Navigation = lazy(()=> import ('./Navigation/Navigation' /* webpackChunkname: 'Navigation' */))




export const App = () => {
  return (
    <> 
      <Suspense fallback={<div>Завантаження...</div>}>
      <Navigation/>
        <Routes>
       <Route path='/' element={<Homepage />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId/*' element={<MovieView />} />
        </Routes>
        </Suspense>
    </>
   
    
  );
};
