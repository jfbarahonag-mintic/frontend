import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Productos from "./views/Productos";
import Producto from "./views/Producto";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";

// Style
import './reset.css';
import './index.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/:slug" element={<Producto />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

