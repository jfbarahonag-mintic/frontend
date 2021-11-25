import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../auth/authContext'

const PublicRouter = ({ children }) => {

  const { user } = useContext(AuthContext)

  const lastPath = localStorage.getItem('lastPath')

  return !user.logged
  ? children
  : <Navigate to={ lastPath } />
}

export default PublicRouter
