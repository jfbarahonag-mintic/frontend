import { useState } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CoverSlider from "../components/CoverSlider";
import ProductsList from "../components/ProductsList";

import './Home.css'
import img1 from "../asset/blade8.jpg";
import img2 from "../asset/ZTE-blade8L811.jpg";
import img3 from "../asset/ZTE-bladeL8.jpg";

const HomeDescription = () => {
  return (
    <section className="home-description box">
      <div className="home-description__container box__container">
        <h2 className="home-description__title sub-title">DESCRIPCIÓN</h2>
        <div className="home_description__content">
          <img 
            className="home_description__img"
            src="/images/home/phone.jpg" 
            alt="Foto descripción"
          />
          <p className="home_description__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </section>
  )
}

const Home = () => {
  
  const images = [
    {
      id: "1",
      title: "Awesome forest",
      image: img1,
      color: 'khaki'
    },
    {
      id: "2",
      title: "A litle bird.",
      image: img2,
      color: 'lightcyan'
    },
    {
      id: "3",
      title: "The best friend.",
      image: img3,
      color: 'seashell'
    },
  ];

  const [products, setProducts] = useState([1,2,3,4,5,6])

  return (
    <>
      <SiteHeader />
      <CoverSlider images={images} />
      <ProductsList 
        products={ products } 
        h2="PRODUCTOS"
      />
      <HomeDescription />
      <SiteFooter />
    </>
  )
}

export default Home
