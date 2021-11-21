import react, {userState} from 'react';
import './ProductCard.css'

function ProductCard({ /* Some props */ }) {
    return ( 
        <div className="product-card">
            <div className="product-card__overview">
                <div className="product-card__overview--images">
                    <div className="product-card__overview--images-list">
                        <ul>
                            {/* TODO: Replace using a For Loop */}
                            <li className="product-card__overview--images-list_item">
                                <img src="/images/test/cel.png" alt="small image" />
                            </li>
                            <li className="product-card__overview--images-list_item">
                                <img src="/images/test/cel.png" alt="small image" />
                            </li>
                            <li className="product-card__overview--images-list_item">
                                <img src="/images/test/cel.png" alt="small image" />
                            </li>
                            <li className="product-card__overview--images-list_item">
                                <img src="/images/test/cel.png" alt="small image" />
                            </li>
                            <li className="product-card__overview--images-list_item">
                                <img src="/images/test/cel.png" alt="small image" />
                            </li>
                            
                        </ul>
                    </div>
                    <div className="product-card__overview--images-main">
                        <img src="/images/test/cel.png" alt="main image" />
                    </div>
                </div>
                <div className="product-card__overview--info">
                    <div className="product-card__overview--info-title">
                        Title
                    </div>
                    <p className="product-card__overview--info-paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa libero? Dicta nemo officiis rem repellat quasi, corporis modi iusto omnis optio animi, voluptate impedit harum quia doloribus quis cupiditate.
                    </p>
                    <div className="product-card__overview--info-price">
                        $XXX.YYY
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
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;