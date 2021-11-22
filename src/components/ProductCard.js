import { useState } from 'react';
import useMediaQuery from './MediaQuery'

import './ProductCard.css'

function ProductCard({ data }) {

    const { title, urls, characteristics, price, description } = data
    
    let [mainImage, setMainImage] = useState(urls[0])
    let [smallImages, setSmallImages] = useState(urls)
    let isPageWide = useMediaQuery('(min-width: 768px)')

    const handleClick = (e) => {
        if (e.target.src !== undefined && e.target.src !== mainImage) {
            setMainImage(e.target.src)
        }
    }

    const listImages = smallImages.map((val, idx) => 
            <li
                className="product-card__overview--images-list_item"
                key={idx}
            >
                <img src={val} alt={idx} onClick={ handleClick }/>
            </li>
    )

    const listCharacteristics = characteristics.map((val, idx) => <li key={idx}> { val } </li>)

    return ( 
        <div className="product-card">
            <div className={ isPageWide ? "product-card__overview" : "product-card__overview-mobile" }>
                <div className={ isPageWide ? "product-card__overview--images" : "product-card__overview--images-mobile" }>
                    <div className="product-card__overview--images-list">
                        <ul>
                            {listImages}
                        </ul>
                    </div>
                    <div className={ isPageWide ? "product-card__overview--images-main" : "product-card__overview--images-main-mobile" } >
                        <img src={ mainImage } alt="main" />
                    </div>
                </div>
                <div className={ isPageWide ? "product-card__overview--info" : "product-card__overview--info-mobile" }>
                    <div className="product-card__overview--info-title">
                        { title }
                    </div>
                    <p className="product-card__overview--info-paragraph">
                        { description }
                    </p>
                    <div className="product-card__overview--info-price">
                        ${ price }
                    </div>
                    <button className="product-card__overview--info-button">
                        Button
                    </button>
                </div>
            </div>
            <div className="product-card__characteristics">
                <div className="product-card__characteristics--title">CHARACTERISTICS</div>
                <div className={ isPageWide ? "product-card__characteristics--list" : "product-card__characteristics--list-mobile" }>
                    <ul>
                        {listCharacteristics}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;