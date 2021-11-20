import React from 'react'
import PropTypes from 'prop-types'
import SiteNav from "../components/SiteNav";
import ProductsFilter from '../components/ProductsFilter';
import SiteHeader from "../components/SiteHeader"
import PageTitle from '../components/PageTitle';


const Productos = props => {
  return (
    <div>
      <SiteHeader />
      <PageTitle title="PRODUCTOS"/> 
      <ProductsFilter />
    </div>
  )
}

Productos.propTypes = {

}

export default Productos
