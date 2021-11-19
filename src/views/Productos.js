import React from 'react'
import PropTypes from 'prop-types'
import SiteNav from "../components/SiteNav"
import PageTitle from '../components/PageTitle';


const Productos = props => {
  return (
    <div>
      <SiteNav />
      <PageTitle title="PRODUCTOS"/> 
    </div>
  )
}

Productos.propTypes = {

}

export default Productos
