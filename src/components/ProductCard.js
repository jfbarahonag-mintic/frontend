import {useState} from 'react';
import './ProductCard.css'

function ProductCard({ data }) {

    const { title, urls, characteristics, price, description } = data
    
    let [mainImage, setMainImage] = useState(urls[0])
    
    const small = urls.slice(1, urls.length)

    let [smallImages, setSmallImages] = useState(small)

    console.log(smallImages)

    const listImages = smallImages.map((val, idx) => 
            <li
                className="product-card__overview--images-list_item"
                key={idx}
            >
                <img src={val} alt={idx} />
            </li>
    )

    const listCharacteristics = characteristics.map((val, idx) => <li key={idx}> { val } </li>)

    return ( 
        <div className="product-card">
            <div className="product-card__overview">
                <div className="product-card__overview--images">
                    <div className="product-card__overview--images-list">
                        <ul>
                            {listImages}
                        </ul>
                    </div>
                    <div className="product-card__overview--images-main">
                        <img src={ mainImage } alt="main" />
                    </div>
                </div>
                <div className="product-card__overview--info">
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
                <div className="product-card__characteristics--list">
                    <ul>
                        {listCharacteristics}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;