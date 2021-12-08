import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router";
import { login } from "../../actions/auth";
import { loginUser } from "../../api";
import jwt_decode from "jwt-decode";
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const setLogin = (data) => { 
    
    localStorage.setItem('token', data.tokenReturn)
    
    let token = jwt_decode(data.tokenReturn)
    
    dispatch( login( token.name ) )

    const lastPath = localStorage.getItem("lastPath") || "/admin";
    navigate(lastPath);
  };

  const LoginForm = () => {

    const [email, setEmail] = useState('juan@mail.com')
    const [password, setPassword] = useState('123456')

    const handleInputChange = (e, setter) => {
      setter(e.target.value)
    }

    const handleSubmit = (e) => {

      e.preventDefault()

      let data = {
        email: email,
        password: password
      }
      
      loginUser(data)
        .then(resp => resp.json())
        .then(data => {
          if (data.tokenReturn) {
            setLogin(data)
          } else {
            alert(data.message)
          }
        })
        .catch(err => console.log(err))
    }

    return (
      <div className="login-form">
        <h1 className="login-form__title">Acceder</h1>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="emailInput">
              Email:
            </label>
              <input 
                id="emailInput"
                type="text"
                name="email"
                value={ email }
                onChange={ (e) => handleInputChange(e, setEmail) }
              />
          </div>
          <div>
            <label htmlFor="passwordInput">
              Contraseña:
            </label>
              <input 
                id="passwordInput"
                type="password" 
                name="password"
                value={ password }
                onChange={ (e) => handleInputChange(e, setPassword) }
              />
          </div>
          <div className="conatiner-button">
            <button type="submit" className="login-form__button">Acceder</button>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="login-page">
      <section className="login-page__col1">

        <LoginForm />

      </section>
      <section className="login-page__col2">
        <div 
          className="img"
          style={{ backgroundImage: "url(/images/login/login-background.jpg)" }}
        ></div>
      </section>
    </div>
  );
};

export default Login;
