import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const SiteNav = props => {
  return (
    <nav
      style={{
        // borderBottom: "solid 1px",
        // paddingBottom: "1rem"
        fontWeight: "200",
      }}
    >
      <Link style={{ "text-decoration": "none" , color: "inherit" , 'margin': '0 1rem 0 2rem' }} to="/">Inicio</Link>
      <Link style={{ "text-decoration": "none" , color: "inherit" , 'margin': '0 1rem' }} to="/productos">Productos</Link>
      <Link style={{ "text-decoration": "none" , color: "inherit" , 'margin': '0 1rem' }} to="/nosotros">Nosotros</Link>
      <Link style={{ "text-decoration": "none" , color: "inherit" , 'margin': '0 1rem' }} to="/contacto">Contacto</Link>
    </nav>
  )
}

SiteNav.propTypes = {

}

export default SiteNav
