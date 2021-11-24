import React from "react";
import Slider from "infinite-react-carousel";

import "./CoverSlider.css";

const CoverSlider = ({ images }) => {
  return (
    <section className="slider">
      <h1 className="slider__title">Carousel con infinite-react-carousel</h1>
      <Slider className="slider__content">
        {images.map((image) => (
          <div
            key={image.id}
            className="slider__content--item"
            style={{ backgroundImage: `url(${image.image})` }}
          >
            {/* <img src={image.image} alt={image.title} /> */}
            <p className="slider-description">{image.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CoverSlider;
