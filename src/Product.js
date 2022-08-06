import React, { useState, useEffect } from "react";
import "./Product.css";
import { ProductCard } from "./ProductCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Product() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  // const productData = [
  //   {
  //     id:1,
  //     image: "https://static.toiimg.com/img/78637928/Master.jpg",
  //     title: "I Mac",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:2,
  //     image:
  //       "https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg",
  //     title: "Mac Book Pro",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },

  //   {
  //     id:3,
  //     image:
  //       "https://techunwrapped.com/wp-content/uploads/2022/02/The-design-of-the-iPhone-14-in-images-and-7.jpeg",
  //     title: "I Phone",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:4,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbNz_bv5Jd9h46NJU4m053uBepAJkdtCST-EchygCkM5ZTzZPZOHEqdr36bH0pvgJFq8&usqp=CAU",
  //     title: "I Pad",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:5,
  //     image: "https://i.redd.it/39r7h8smmof61.jpg",
  //     title: "I Watch",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:6,
  //     image:
  //       "https://images.squarespace-cdn.com/content/v1/5aef2fad9d5abb57b704f0e2/1608260781895-S8ENVI3SXAGTHJ3HTI9D/Airpods+Max.png?format=750w",
  //     title: "Air Pod Max",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },

  //   {
  //     id:7,
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1632861342000",
  //     title: "Air Pod",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  //   {
  //     id:8,
  //     image:
  //       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/apple-tv-4k-hero-select-202104_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1617137945000",
  //     title: "I Tv",
  //     content:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //   },
  // ];

  async function getProductData() {
    try {
      let data = await fetch(
        "https://61f1b9df072f86001749f34c.mockapi.io/product"
      );
      let productsData = await data.json();
      // console.log(productsData)
      setProducts(productsData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  let handleDelete = async (productId) => {
    let ask = window.confirm("Do you want to delete this user?");
    if (ask) {
      await axios.delete(
        `https://61f1b9df072f86001749f34c.mockapi.io/product/${productId}`
      );
      getProductData();
    }
  };

  return (
    <>
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            <h1 className="mb-2 text-grey-800">Product</h1>
            <p className="mb-2">
              DataTables is a third party plugin that is used to generate the
              demo table below. For more information about DataTables, please
              visit the
            </p>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/products/createproducts")}
            >
              Create Products
            </button>
          </div>
          <div className="row">
            {products.map((data, index) => (
              // <ProductCard data={item} key={index}/>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3" key={index}>
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img src={data.image} alt={data.title} />
                    </div>
                    <div className="text-container">
                      <h6>{data.title}</h6>
                      <p>{data.content}</p>
                      <Link
                        to={`/products/${data.id}`}
                        className="btn btn-sm mt-3 mx-1 btn-warning"
                      >
                        View
                      </Link>
                      <Link
                        to={`/products/editdata/${data.id}`}
                        className="btn btn-sm mt-3 mx-1 btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(data.id)}
                        className="btn btn-sm mt-3 mx-1 btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
