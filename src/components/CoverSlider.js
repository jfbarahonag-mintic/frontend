import React from "react";
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Slider from "infinite-react-carousel";
import "./CoverSlider.css";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';

const CoverSlider = ({ images }) => {

  SwiperCore.use([Autoplay, Pagination]);
  
  const settings = {
    autoplay: true,
    arrows: false,
    dots: true
  };

  return (
    <section className="slider">
      <Swiper 
        className="slider-content"
        spaceBetween={-1}
        slidesPerView={1}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ 
          delay: 2000
         }}
        loop={true}
        pagination={true}
      >
      {/* <Slider {...settings}> */}
        {images.map((image) => {
          return (
            <SwiperSlide
              key={image.id} 
              className="slider__item-wraper"
            > 
              <div className="slider__item"
                // style={{ backgroundColor: image.color }}>
                style={{ backgroundImage: `url(${image.path})` }}>

                {/* <img src={image.image} alt={image.title} /> */}
                <p className="slider__item-description">
                  <a href="/">
                      {image.title}
                  </a>
                </p>

              </div>
            </SwiperSlide> 
          )
        })
        }
      {/* </Slider> */}
      </Swiper>
    </section>
  );
};

export default CoverSlider;
