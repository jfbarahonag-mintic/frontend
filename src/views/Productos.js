import React from 'react'
import PropTypes from 'prop-types'
import SiteNav from "../components/SiteNav";
import ProductsFilter from '../components/ProductsFilter';

const Productos = props => {
  return (
    <div>
      <SiteNav />
      <br/>
      <ProductsFilter />
      <h1>Productos</h1>
    </div>
  )
}

Productos.propTypes = {

}

export default Productos
