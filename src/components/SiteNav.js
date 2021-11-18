import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const SiteNav = props => {
  return (
    <nav
      style={{
        // borderBottom: "solid 1px",
        // paddingBottom: "1rem"
      }}
    >
      <Link style={{ 'margin': '0 1rem' }} to="/">Inicio</Link>
      <Link style={{ 'margin': '0 1rem' }} to="/productos">Productos</Link>
      <Link style={{ 'margin': '0 1rem' }} to="/nosotros">Nosotros</Link>
      <Link style={{ 'margin': '0 1rem' }} to="/contacto">Contacto</Link>
    </nav>
  )
}

SiteNav.propTypes = {

}

export default SiteNav
