import React, { useState, useEffect } from 'react'
import ProductsFilter from '../components/ProductsFilter';
import SiteHeader from "../components/SiteHeader"
import BreadCrumbs from '../components/BreadCrumbs';
import PageTitle from '../components/PageTitle';
import ProductsList from '../components/ProductsList';
import SiteFooter from '../components/SiteFooter';
import Paginator from '../components/Paginator'

import { getProducts, getProductsByQuery } from "../api";
import { useLocation } from 'react-router';
import queryString from "query-string";


const Productos = () => {

  const BreadcrumbsLinks = [
    {
      name: 'Inicio',
      path: '/'
    },
    {
      name: 'Productos',
      path: '/productos'
    },
  ]

  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [products, setProducts] = useState([])

  useEffect(() => {
    if (q) {
      getProductsByQuery(q)
      .then(resp => resp.json())
      .then(resp => setProducts(resp))
    } else {
      getProducts()
      .then(resp => resp.json())
      .then(resp => setProducts(resp))
    }
  }, [q])

  return (
    <div>
      <SiteHeader />
      <BreadCrumbs links={ BreadcrumbsLinks }/>
      <PageTitle title="PRODUCTOS"/> 
      <ProductsFilter />
      <ProductsList products={ products } />
      <Paginator />
      <SiteFooter />
    </div>
  )
}

export default Productos
