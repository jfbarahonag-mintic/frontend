import React from "react";
import { useState } from "react";

import { TableProducts } from "../../../components/admin/TableProducts";
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
      <TableProducts titles={columns} rows={products} />
    </div>
  );
}
export default Home;
