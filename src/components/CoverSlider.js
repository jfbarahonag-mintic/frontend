import React from "react";
import Slider from "infinite-react-carousel";
// import prevArrowP from "../asset/left1-arrow.png";
// import nextArrowP from "../asset/next.png";

import "./CoverSlider.css";
const CoverSlider = ({ images }) => {
  const settings = {
    autoplay: true,
  };

  return (
    <section className="slider">
      <h1 className="slider__title">Carousel con infinite-react-carousel</h1>
      <Slider className="slider__content" {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slider__content--item">
            <a href="/#">
              <img src={image.image} alt={image.title} />
              <p className="slider-description">{image.title}</p>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CoverSlider;
