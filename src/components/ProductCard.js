import { Link } from 'react-router-dom';
import './ProductCard.css'

function ProductCard({ name, img_src, price, slug }) {
    
  return (
    <Link to={`/producto/${slug}`}>
      <div className="product-card">
          <h3 className="product-card__title">
              { name }
          </h3>
          <img className="product-card__img" src="/images/productos/cel.png" alt={ name } />
          <p className="product-card__price">
              ${ price.toLocaleString("es-ES") }
          </p>
      </div>
    </Link>
  )
}

export default ProductCard;
