import React, { useEffect, useState } from "react";
import style from "../../Styles/details.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";


function Details() {
  let [product, setProduct] = useState({});
  const { id } = useParams();
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
      setAlertMessage("Failed to add item to cart. Please try again.");
      setAlertType("error");

      // Hide alert after 1.5 seconds
      setTimeout(() => {
        setAlertMessage("");
        setAlertType("");
      }, 1500);
    }
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={style.detailsContainer}>
      <div className={style.imageContainer}>
        <img src={product.thumbnail} alt="Product" className={style.productImage} />
      </div>
      <div className={style.details}>
        <h2 className={style.productTitle}>{product.title}</h2>
        {product.discountPercentage > 0 && (
          <span className={style.discountBadge}>
            {product.discountPercentage}% Off
          </span>
        )}
        <div className={style.priceSection}>
          <p className={style.price}>
            ${(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          {product.discountPercentage > 0 && (
            <span className={style.discountedPrice}>${product.price}</span>
          )}
        </div>
        <p className={style.description}>{product.description}</p>
        <hr />
        <p className={`${style.stock} ${product.stock === 0 ? style.outOfStock : ""}`}>
          {product.stock > 0 ? `In Stock: ${product.stock}` : "Out Of Stock"}
        </p>
        <p className={style.category}>Category: {product.category}</p>
        <button
            className={`${style.button}`}
            onClick={() =>
              addItem(product.title, product.price, product.thumbnail)
            }
          >
            Add To Cart
          </button>
      </div>
    </div>
  );
}

export default Details;
