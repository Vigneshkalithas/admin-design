import React from "react";
import "./Product.css";
import { ProductCard } from "./ProductCard";

function Product() {
  const productData = [
    {
      image: "https://static.toiimg.com/img/78637928/Master.jpg",
      title: "I Mac",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image:
        "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
      title: "MacBook",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
      image:
        "https://techunwrapped.com/wp-content/uploads/2022/02/The-design-of-the-iPhone-14-in-images-and-7.jpeg",
      title: "I Phone",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbNz_bv5Jd9h46NJU4m053uBepAJkdtCST-EchygCkM5ZTzZPZOHEqdr36bH0pvgJFq8&usqp=CAU",
      title: "I Pad",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: "https://i.redd.it/39r7h8smmof61.jpg",
      title: "I Watch",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5aef2fad9d5abb57b704f0e2/1608260781895-S8ENVI3SXAGTHJ3HTI9D/Airpods+Max.png?format=750w",
      title: "Air Pod Max",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632861342000",
      title: "Air Pod",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000",
      title: "I Tv",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {productData.map((item) => (
              <ProductCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
