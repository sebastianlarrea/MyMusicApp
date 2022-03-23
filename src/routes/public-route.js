import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
    const auth = localStorage.getItem('ACCESS_TOKEN')
    return !auth ? children : <Navigate to="/home" />
}

export default PublicRoute
