import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const SiteNav = props => {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem"
      }}
    >
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/productos">Productos</Link> |{" "}
      <Link to="/nosotros">Nosotros</Link> |{" "}
      <Link to="/contacto">Contacto</Link>
    </nav>
  )
}

SiteNav.propTypes = {

}

export default SiteNav
