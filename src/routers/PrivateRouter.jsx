import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router'

const PrivateRouter = ({ children }) => {

  const user = useSelector(state => state.auth)
  
  const { pathname } = useLocation()

  localStorage.setItem('lastPath', pathname )

  return user.logged
  ? children
  : <Navigate to="/login" />
}

export default PrivateRouter
