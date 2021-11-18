import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './styles/SiteNav.css'


const SiteNav = props => {
  return (
    <nav className="NavBar">
      <Link className="NavItem" to="/">Inicio</Link>
      <Link className="NavItem" to="/productos">Productos</Link>
      <Link className="NavItem" to="/nosotros">Nosotros</Link>
      <Link className="NavItem" to="/contacto">Contacto</Link>
    </nav>
  )
}

SiteNav.propTypes = {

}

export default SiteNav
