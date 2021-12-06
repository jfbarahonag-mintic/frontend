import React from "react";
import { useState } from "react";

import { ProductsTable } from "../../../components/admin/ProductsTable";
import { getProducts } from "../../../api";
import { useEffect } from "react";

//TODO: Rename this Component
function Home({ children }) {
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
export default Home;
