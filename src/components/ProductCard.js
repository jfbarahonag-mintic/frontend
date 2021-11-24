import { Link } from 'react-router-dom';
import './ProductCard.css'

function ProductCard({ name, url, price, slug }) {
    
  return (
    <Link to={`/producto/${slug}`}>
      <div className="product-card">
          <h3 className="product-card__title">
              { name }
          </h3>
          <img className="product-card__img" src={ url } alt={ name } />
          <span className="product-card__price">
              ${ price }
          </span>
      </div>
    </Link>
  )
}

export default ProductCard;
