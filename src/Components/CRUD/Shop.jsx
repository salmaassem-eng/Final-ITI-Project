import React, { useContext, useState } from "react";
import style from "../../Styles/shop.module.css";
import ProductCard from "./ProductCard";
import ProductContext from "../../ContextAPIs/ProductsContext";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, getProducts, deleteProduct } = useContext(ProductContext);
  return (
    <div className={` ${style.templateContainer} py-5 ${style.backg}`}>
      <div className="container m-auto py-5">
        <input
          className={`form-control`}
          id="searchInput"
          type="search"
          placeholder="Search here..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <div className={`${style.cardContainer} py-5`}>
          {products
            .filter((p) => {
              if (searchTerm === "") {
                console.log(p);
                return p;
              } else if (
                p.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return p;
              }
            })
            .map((prodcutItem) => {
              return (
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

export default Shop;
