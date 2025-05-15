import React from 'react'
import { useAuth } from '../../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'



export default function ProtectedRoute() {
    const {user, isAuthenticated, loading} = useAuth()
    if (loading) return <div>Loading...</div>
    if (!loading && !isAuthenticated) return <Navigate to="/login" replace /> 

  return (
    <Outlet />
  )
}