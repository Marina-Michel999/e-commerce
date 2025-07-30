import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function ProtectedRoutes({children}) {
    const {token} = useContext(AuthContext)
    const location = useLocation()
    if (token === null) {
        return <Navigate to="/logIn" state={{from:location.pathname}}/>
    }else{
        return children
    }
}
