import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

const Logout = props => {

  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const handleLogout = () => {

    const action = {
      type: types.logout
    }

    dispatch(action)

    navigate('/login', {
      replace: true
    })
  }

  return (
    <div onClick={ handleLogout }>
      { props.children }
    </div>
  )
}

export default Logout
