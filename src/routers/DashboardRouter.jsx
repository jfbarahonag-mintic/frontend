import React from 'react'
import { Route, Routes } from 'react-router'

// Dashboard
import AdminHome from '../views/admin/AdminHome'
// Products
import ProductsHome from '../views/admin/products/ProductsHome'
import ProductCreate from '../views/admin/products/ProductCreate'
import ProductEdit from '../views/admin/products/ProductEdit'
import ProductShow from '../views/admin/products/ProductShow'
// Categories
import CategoriesHome from '../views/admin/categories/CategoriesHome'
// Users
import UsersHome from '../views/admin/users/UsersHome'

import SideBar from '../components/admin/SideBar'


const DashboardRouter = () => {
  return (
    <>
      <SideBar />
      <Routes>

        <Route path="/" element={ <AdminHome /> } />

        <Route path="/products" element={ <ProductsHome /> } />
        <Route path="/products/create" element={ <ProductCreate /> } />
        <Route path="/products/edit" element={ <ProductEdit /> } />
        <Route path="/products/show" element={ <ProductShow /> } />

        <Route path="/categories" element={ <CategoriesHome /> } />

        <Route path="/users" element={ <UsersHome /> } />

      </Routes>
    </>
  )
}

export default DashboardRouter
