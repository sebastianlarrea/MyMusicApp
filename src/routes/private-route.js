import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('ACCESS_TOKEN')
    const expireDate = localStorage.getItem('EXPIRE_DATE')
    const tokenIsExpired = Date.now() > expireDate
    if (tokenIsExpired) localStorage.removeItem('ACCESS_TOKEN')

    return (auth && !tokenIsExpired) || window.location.hash ? (
        children
    ) : (
        <Navigate to="/" />
    )
}

export default PrivateRoute
