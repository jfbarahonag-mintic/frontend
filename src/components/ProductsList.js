import ProductCard from "./ProductCard"
import './ProductsList.css'

const ProductsList = ({products, h2}) => {
  return (
    <section className="products-list box">
      <div className="box__container">
        { h2 ? <h2 className="products-list__title sub-title">PRODUCTOS</h2> : '' }
        <div className="products-list__grid">
          {
            products.map(product => {
              return <ProductCard key={ product._id } />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsList
