import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import "./Login.css";
// import imgLogin from "../../assets/Login.jpg";

const Login = () => {

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: "Fernando Torres" },
    };

    dispatch(action);

    const lastPath = localStorage.getItem("lastPath");

    navigate("/admin");
  };

  const LoginForm = () => {
    return (
      <div className="login-form">
        <h1 className="login-form__title">Acceder</h1>
        <form action="">
          <div>
            <label>
              Correo
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Contraseña
              <input type="password" />
            </label>
          </div>
          <div className="conatiner-button">
            <button className="login-form__button" onClick={handleLogin}>Acceder</button>
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
        {/* <img src={imgLogin} alt="" /> */}
        <div 
          className="img"
          style={{ backgroundImage: "url(/images/login/login-background.jpg)" }}
        ></div>
      </section>
    </div>
  );
};

export default Login;
