import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const PublicRouter = ({ children }) => {
  
  const user = useSelector(state => state.auth)

  const lastPath = localStorage.getItem('lastPath') || "/admin"

  return !user.logged
  ? children
  : <Navigate to={ lastPath } />
}

export default PublicRouter
