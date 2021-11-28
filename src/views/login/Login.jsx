import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";
import "./Login.css";
import imgLogin from "../../assets/Login.jpg";
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

  return (
    <div className="container">
      <div className="container-content">
        <div className="container-form">
          <h1 className="container-form__title">Acceder</h1>
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
                <input type="text" />
              </label>
            </div>
            <div className="conatiner-button">
              <button className="container-button__form" onClick={handleLogin}>Acceder</button>
            </div>
          </form>
        </div>
      </div>
      <div className="container-img">
        <img src={imgLogin} alt="" />
      </div>
    </div>
  );
};

export default Login;
