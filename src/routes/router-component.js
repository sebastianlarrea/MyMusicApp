import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PublicRoute from './public-route'
import PrivateRoute from './private-route'
import Login from 'pages/login'
import Home from 'pages/home'
import Albums from 'pages/albums'
import Favorites from 'pages/favorites'

const RouterComponent = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/home"
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route
                path="/favs"
                element={
                    <PrivateRoute>
                        <Favorites />
                    </PrivateRoute>
                }
            />
            <Route
                path="/albums"
                element={
                    <PrivateRoute>
                        <Albums />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}

export default RouterComponent
