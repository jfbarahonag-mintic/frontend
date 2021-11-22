import './ProductCard.css'

function ProductCard({ title, url, price }) {
    
  return (
    <div className="product-card">
        <h3 className="product-card__title">
            { title }
        </h3>
        <img className="product-card__img" src={ url } alt="product" />
        <span className="product-card__price">
            ${ price }
        </span>
    </div>
  )
}

export default ProductCard;
