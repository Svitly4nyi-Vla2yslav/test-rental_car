import React from 'react';

import  { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';

import SharedLayout from "./components/SharedLayout/SharedLayout"
import ErrorPage from "./pages/ErrorPage/ErrorPage"


const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"))
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"))

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/catalog" element={<CatalogPage/>}/>
        <Route path="/favorites" element={<FavoritesPage/>}/>
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </>
  )
}

export default App