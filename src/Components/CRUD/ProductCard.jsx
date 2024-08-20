import React, { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "../../Styles/shop.module.css";
import ProductsContext from "../../ContextAPIs/ProductsContext";


export default function ProductCard({
  product,
  deleteProduct,
 
}) {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); 

  let {addItem}= useContext(ProductsContext)
  const addItemToCart = async (title, price, image) => {
    await addItem(title,price,image)
      setAlertMessage(`Product added successfully`);
      setAlertType("success");

      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 1500);
    } 
  

  const handleDelete = (e) => {
    e.stopPropagation();
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (confirmed) {
      deleteProduct(product.id);
    }
  };

  return (
    <div>
      <div className={`card p-0 ${style.ay}`} key={product.id}>
        <div className="position-relative">
          {localStorage.getItem('username') === 'rewaa' && (
            <button
              className={`p-2 btn-close ${style.closeButton} position-absolute`}
              onClick={handleDelete}
            />
          )}
          <Link to={`/shop/${product.id}`}>
            <img
              src={product.thumbnail}
              className={"card-img-top object-fit-cover"}
              alt="Product-img"
              height="300"
            />
          </Link>
        </div>
        <div className={"card-body text-center"}>
          <h5 className={`card-title ${style.head}`}>{product.title}</h5>
          <p className={`card-text text-dark fw-bold`}>
            ${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
            {product.discountPercentage > 0 && (
              <span className={style.discount}>$ {product.price}</span>
            )}
          </p>
          <p className={`card-text text-dark fw-bold`}>
            {product.category}
          </p>
          {localStorage.getItem('username') === 'rewaa' && (
            <Link to={`/edit/${product.id}`} className={`btn btn-dark px-5 ${style.pbtn}`}>
              Edit
            </Link>
          )}
          <button
            className={`btn btn-dark w-50 mx-auto ms-1 ${style.pbtn}`}
            onClick={() =>
              addItemToCart(product.title, product.price, product.thumbnail)
            }
          >
            Add To Cart
          </button>
        </div>
      </div>
      {alertMessage && (
        <div className={`${style.alertMessage} ${style[`alert${alertType.charAt(0).toUpperCase() + alertType.slice(1)}`]}`} role="alert">
          {alertMessage}
        </div>
      )}
    </div>
  );
}