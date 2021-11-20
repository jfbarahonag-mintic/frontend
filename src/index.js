import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Productos from "./views/Productos";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";

import './reset.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your Home, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
