import React, { useEffect, useState } from "react"
import { useDispatch } from 'react-redux'
import { login, logout } from "./actions/auth"
import { setCategories } from "./actions/data"
import { getCategories } from "./api"
import AppRouter from './routers/AppRouter'
import getUserFromToken from "./helpers/getUserFromToken"

const App = () => { 
  
  const dispatch = useDispatch()
  
  const [user, setUser] = useState( getUserFromToken() )
  const [isLoading, setIsLoading] = useState(true)

  // Sets isLogged and dispatch to state
  useEffect(() => {
    if (!user.name) {
      dispatch( logout() )
      setIsLoading(false)
    } 
    else {
      dispatch( login( user.name ) )
      setIsLoading(false)
    }
  }, [user])
  
  // Get categories from bkend n' dispatch to state
  useEffect(() => {
    getCategories()
    .then(resp => resp.json())
    .then(data => dispatch( setCategories(data) ) )
  }, [])

  // Retunr "spiner" while isLoading
  if (isLoading) return <span>Cargando...</span>

  return (
    <AppRouter />
  )
}

export default App
