import { useState } from 'react';
import useMediaQuery from './MediaQuery'

import './ProductCard.css'

function ProductCard({ data }) {
    const { title, url, price } = data
    return (
        <div className="product-card">
            <span className="product-card__title">
                { title }
            </span>
            {/* <button className="product"> */}
            <img className="product-card__img" src={ url } alt="product" />
            {/* </button> */}
            <span className="product-card__price">
                ${ price }
            </span>
        </div>
    )
}

export default ProductCard;