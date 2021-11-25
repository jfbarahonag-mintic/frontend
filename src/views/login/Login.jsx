import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from "../../auth/authContext"
import { types } from "../../types/types"

const Login = () => {

  const navigate = useNavigate()
  const { user, dispatch } = useContext( AuthContext )

  const handleLogin = () => {
    
    const action = {
      type: types.login,
      payload: { name: 'Fernando Torres' }
    }

    dispatch(action)

    const lastPath = localStorage.getItem('lastPath')

    navigate('/admin')

  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={ handleLogin } >Login</button>
    </div>
  )
}

export default Login
