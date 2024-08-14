import React, { useContext, useEffect, useState } from "react";
import style from "../Styles/home.module.css";
import ProductCard from "../Components/CRUD/ProductCard";
import PostsContext from "../ContextAPIs/ProductsContext";
import main from "../Styles/shop.module.css";

import { Link } from "react-router-dom";

export default function Home() {

  const { products, getProducts, deleteProduct } = useContext(PostsContext);

  return (
    <div>
      <div
        class="card text-bg-dark border-0 border border-radius-0"
        style={{ height: "fit-content" }} className={main.carddiv}
      >
        <img
          src="https://img.freepik.com/free-photo/blue-armchair-against-blue-wall-living-room-interior-elegant-interior-design-with-copy-space-ai-generative_123827-23718.jpg?w=1060&t=st=1692188278~exp=1692188878~hmac=20231687c43fc76c5cc3c28a4d699435993cdce72119d6cc020832468f98550b"
          class="card-img " 
          alt="..."
        />
        <div class="card-img-overlay ms-5 mt-5 ps-5  ">
          <h1 class="card-title" className={style.para}>
            Find the Best<h3>Furniture</h3>
          </h1>
          <p class="card-text">
            <h4>For your Modern Interiors</h4>
          </p>
          <button className={style.button} >
            <Link className={style.link} to="/Shop">Shop Now</Link>
            </button>
        </div>
      </div>
      <div className={style.about}>
        <img
          src="https://i.pinimg.com/564x/a7/81/4b/a7814b69c748ab664a3b8ea5d1260e38.jpg"
          alt=""
          srcset=""
        />
        <div className={style.text}>
          <h3 className={style.h3text}>
            We build the best Furniture <br /> for your comfort and 
            choice
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> A officia itaque corrupti quidem inventore ex corporis natus{" "}
            <br /> distinctio. Perspiciatis maxime nam, reprehenderit odit qui
            magni <br />
            eaque nemo sit distinctio! Accusamus!
          </p>
          <span
            class="d-inline-block"
            tabindex="0"
            data-bs-toggle="popover"
            data-bs-trigger="hover focus"
            data-bs-content="Disabled popover"
          >
            <button className={style.button} type="button">
              <Link className={style.link2} to="/Shop">
              Shop Now</Link>
            </button>
          </span>
        </div>
      </div>
      <div className="container m-auto mt-5 p-5">
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
      </div>

     
    </div>
  );
}

