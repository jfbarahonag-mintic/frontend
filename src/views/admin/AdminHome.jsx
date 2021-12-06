import React, { useState, useEffect } from 'react'

import { CardSections } from '../../components/admin/CardSections'

import { getProducts, getCategories, getUsers } from '../../api'

const AdminHome = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getFromBkend = async (endpointQuery, setter) => {
      let resp = await endpointQuery();
      resp = await resp.json()
      setter(resp);
    }

    getFromBkend(getProducts, setProducts)
    getFromBkend(getCategories, setCategories)
    getFromBkend(getUsers, setUsers)
  }, [])
  
  return (
    <div>
      <CardSections
        section="Categorias"
        endpoint="categories"
        length={categories.length}
        >

      </CardSections>
      <CardSections
        section="Productos"
        endpoint="products"
        length={products.length}
        >

      </CardSections>
      <CardSections
        section="Usuarios"
        endpoint="users"
        length={users.length}
      >

      </CardSections>
    </div>
  )
}

export default AdminHome
