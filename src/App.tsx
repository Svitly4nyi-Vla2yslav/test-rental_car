import React from 'react';

import  { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

import SharedLayout from "./components/SharedLayout/SharedLayout"
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';


// const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
// const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"))
// const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"))

const App = () => {
  return (
 
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="catalog" element={<CatalogPage/>}/>
        <Route path="favorites/" element={<FavoritesPage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
      
    </Routes>
   
  )
}

export default App