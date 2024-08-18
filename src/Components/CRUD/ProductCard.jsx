<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> c92dc7d0028d632706f10035c6c2160141d3fc7f
import { Link } from "react-router-dom";
import style from "../../Styles/shop.module.css";
import axios from "axios";

export default function ProductCard({
  product,
  deleteProduct,
}) {
<<<<<<< HEAD
  let qty = 1;

  const addItem = async (title, price, image) => {
    const userId = localStorage.getItem('userId'); // Get userId from localStorage
    let isExisting = false;

    const result = await axios.get(`http://localhost:5000/orderItem?userId=${userId}`);
    if (result.data.length === 0) {
      const order = { title, price, qty, image, userId };
      await axios.post(`http://localhost:5000/orderItem`, order);
    } else {
      result.data.forEach((orderItem) => {
        if (title === orderItem.title) {
          orderItem.qty += 1;
          const updatedOrder = {
            title,
            price,
            qty: orderItem.qty,
            image,
            userId,
          };
          axios.put(`http://localhost:5000/orderItem/${orderItem.id}`, updatedOrder);
          isExisting = true;
        }
      });

      if (!isExisting) {
        const newOrder = {
          title,
          price,
          qty,
          image,
          userId,
        };
        await axios.post(`http://localhost:5000/orderItem`, newOrder);
=======
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState(""); // 'success' or 'error'

  const addItem = async (title, price, image) => {
    try {
      const result = await axios.get("http://localhost:5000/orderItem");
      const existingItem = result.data.find(item => item.title === title);
      
      if (existingItem) {
        // Update quantity of the existing item
        existingItem.qty += 1;
        await axios.put(`http://localhost:5000/orderItem/${existingItem.id}`, existingItem);
      } else {
        // Add a new item to the cart
        const order = { title, price, qty: 1, image };
        await axios.post("http://localhost:5000/orderItem", order);
>>>>>>> c92dc7d0028d632706f10035c6c2160141d3fc7f
      }

      // Show success alert
      setAlertMessage(`Product added successfully`);
      setAlertType("success");

      // Hide alert after 1.5 seconds
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 1500);
    } catch (error) {
      // Show error alert
      setAlertMessage("Failed to add item to cart. Please try again.");
      setAlertType("error");

      // Hide alert after 1.5 seconds
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 1500);
    }
  };

<<<<<<< HEAD
  return (
    <div className={`card p-0 border-0 ${style.pbkg}`} key={product.id}>
      <div className={`position-relative`}>
        <button
          className={`p-2 btn-close position-absolute ${localStorage.getItem('username') === 'rewaa' ? '' : 'd-none'}`}
          onClick={(e) => {
            deleteProduct(product.id);
            e.stopPropagation();
          }}
        ></button>
        <Link to={`/shop/${product.id}`}>
          <img
            src={product.thumbnail}
            className={`card-img-top object-fit-cover`}
            alt="Product-img"
            height="300"
          />
        </Link>
      </div>
      <div className={`card-body text-center`}>
        <h5 className={`card-title ${style.head}`}>{product.title}</h5>
        <p className={`card-text text-dark fw-bold`}>
          $
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
          {product.discountPercentage > 0 ? (
            <span className={style.discount}> ${product.price}</span>
          ) : null}
        </p>
        {
          localStorage.getItem('username') === 'rewaa' ? (
=======
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
              className={`card-img-top object-fit-cover`}
              alt="Product-img"
              height="300"
            />
          </Link>
        </div>
        <div className={`card-body text-center`}>
          <h5 className={`card-title ${style.head}`}>{product.title}</h5>
          <p className={`card-text text-dark fw-bold`}>
            ${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
            {product.discountPercentage > 0 && (
              <span className={style.discount}> ${product.price}</span>
            )}
          </p>
          {localStorage.getItem('username') === 'rewaa' && (
>>>>>>> c92dc7d0028d632706f10035c6c2160141d3fc7f
            <Link to={`/edit/${product.id}`} className={`btn btn-dark px-5 ${style.pbtn}`}>
              Edit
            </Link>
          )}
          <button
            className={`btn btn-dark w-50 mx-auto ms-1 ${style.pbtn}`}
            onClick={() =>
              addItem(product.title, product.price, product.thumbnail)
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
