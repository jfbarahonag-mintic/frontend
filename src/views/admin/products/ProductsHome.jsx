import React from "react";
import { useState } from "react";
import { ProductsTable } from "../../../components/admin/ProductsTable";
import { getProducts } from "../../../api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDashboardTitle } from '../../../actions/ui'

const ProductsHome = ({ children }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( setDashboardTitle('Productos') )
  }, [])

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((resp) => resp.json())
      .then((resp) => {
        setProducts(resp);
      });
  }, []);

  const columns = ["Status", "Categorias", "Nombre", "Precio", "", ""];
  return (
    <div style={{ color: "red" }}>
      <ProductsTable titles={columns} rows={products} />
    </div>
  );
}
export default ProductsHome;
