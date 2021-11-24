import SiteNav from "../components/SiteNav";
import CoverSlider from "../components/CoverSlider";
import img1 from "../asset/blade8.jpg";
import img2 from "../asset/ZTE-blade8L811.jpg";
import img3 from "../asset/ZTE-bladeL8.jpg";
export default function App() {
  const images = [
    {
      id: "1",
      title: "Awesome forest",
      image: img1,
    },
    {
      id: "2",
      title: "A litle bird.",
      image: img2,
    },
    {
      id: "3",
      title: "The best friend.",
      image: img3,
    },
    // {
    //   id: "4",
    //   title: "Beautiful desert.",
    //   image:
    //     "https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg",
    // },
    // {
    //   id: "5",
    //   title: "Harley Davidson motorcycle.",
    //   image:
    //     "https://cdn.pixabay.com/photo/2018/10/26/22/55/harley-davidson-3775527_960_720.jpg",
    // },
  ];

  return (
    <div>
      <SiteNav />
      <CoverSlider images={images} />
      <h1>Home</h1>
    </div>
  );
}
