import { useState } from 'react';
import useMediaQuery from './MediaQuery'

import './Producto.css'

function Producto({ data }) {

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
                className="product__overview--images-list_item"
                key={idx}
            >
                <img src={val} alt={idx} onClick={ handleClick }/>
            </li>
    )

    const listCharacteristics = characteristics.map((val, idx) => <li key={idx}> { val } </li>)

    return ( 
        <div className="product">
            <div className={ isPageWide ? "product__overview" : "product__overview-mobile" }>
                <div className={ isPageWide ? "product__overview--images" : "product__overview--images-mobile" }>
                    <div className="product__overview--images-list">
                        <ul>
                            {listImages}
                        </ul>
                    </div>
                    <div className={ isPageWide ? "product__overview--images-main" : "product__overview--images-main-mobile" } >
                        <img src={ mainImage } alt="main" />
                    </div>
                </div>
                <div className={ isPageWide ? "product__overview--info" : "product__overview--info-mobile" }>
                    <div className="product__overview--info-title">
                        { title }
                    </div>
                    <p className="product__overview--info-paragraph">
                        { description }
                    </p>
                    <div className="product__overview--info-price">
                        ${ price }
                    </div>
                    <button className="product__overview--info-button">
                        Button
                    </button>
                </div>
            </div>
            <div className="product__characteristics">
                <div className="product__characteristics--title">CHARACTERISTICS</div>
                <div className={ isPageWide ? "product__characteristics--list" : "product__characteristics--list-mobile" }>
                    <ul>
                        {listCharacteristics}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Producto;
