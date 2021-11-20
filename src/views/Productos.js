import React from 'react'
import PropTypes from 'prop-types'
import SiteHeader from "../components/SiteHeader"
import PageTitle from '../components/PageTitle';


const Productos = props => {
  return (
    <div>
      <SiteHeader />
      <PageTitle title="PRODUCTOS"/> 
    </div>
  )
}

Productos.propTypes = {

}

export default Productos
