import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('ACCESS_TOKEN')

    return auth || window.location.hash ? children : <Navigate to="/" />
}

export default PrivateRoute
