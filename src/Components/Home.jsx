import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../Styles/home.module.css";
import main from "../Styles/shop.module.css";
import image from "../Images/library-6889590_1280.jpg";
import image2 from "../Images/shelf2.png";
import ProductCard from "../Components/CRUD/ProductCard";
import PostsContext from "../ContextAPIs/ProductsContext";

export default function Home() {

  const { products, getProducts, deleteProduct } = useContext(PostsContext);

  return (
    <div className={style.bkg}>
      <div class="card text-center" className={style.imgcard}>
        <div class="card-body" className={style.parentt}>
          <h1 class="card-title title" className={style.title}>
            welcome to our BookShop
          </h1>
          <button className={style.button} >
            <Link className={style.link} to="/Shop">Shop Now</Link>
          </button>
        </div>
      </div>
      <div className={style.about}>
        <img src={image2} alt="" class='col-md-7'/>
        <div className={style.text} class='col-md-5 contianer'>
          <h3 className={style.h3text}>
            We build the best Furniture for your comfort and
            choice
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> A officia itaque corrupti quidem inventore ex corporis natus{" "}
            <br /> distinctio. Perspiciatis maxime nam, reprehenderit odit qui
            magni
            <br />
            eaque nemo sit distinctio! Accusamus!
          </p>
          <button className={style.button2} >
            <Link className={style.link3} to="/Shop">Shop Now</Link>
          </button>
        </div>
      </div>
      {/* <div className="container m-auto mt-5 p-5">
        <h1 className="text-center mb-5">Our Products</h1>
        <div className={main.cardContainer}>
          {products?.map((prodcutItem) => {
            // console.log("prodcutItem", prodcutItem);
            return (
              // ProductCard

              <ProductCard
                getProducts={getProducts}
                deleteProduct={deleteProduct}
                key={prodcutItem.id}
                product={prodcutItem}
              />
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

