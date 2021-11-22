import React, { useState } from 'react'
import ProductsFilter from '../components/ProductsFilter';
import SiteHeader from "../components/SiteHeader"
import BreadCrumbs from '../components/BreadCrumbs';
import PageTitle from '../components/PageTitle';
import ProductsList from '../components/ProductsList';
import SiteFooter from '../components/SiteFooter';

const Productos = props => {

  const [products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])

  return (
    <div>
      <SiteHeader />
      <BreadCrumbs />
      <PageTitle title="PRODUCTOS"/> 
      <ProductsFilter />
      <ProductsList products={ products } />
      <SiteFooter />
    </div>
  )
}

Productos.propTypes = {

}

export default Productos
