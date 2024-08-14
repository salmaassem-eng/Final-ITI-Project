import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "../Styles/Signin.module.css";

const Profile = () => {
  const productsUrl = "http://localhost:5000/orderItem";
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0); // Set initial total to 0

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const result = await axios.get(productsUrl);
      const fetchedItems = result.data;
      setItems(fetchedItems);

      let totalPrice = 0;
      fetchedItems.forEach((item) => {
        totalPrice += item.qty * Number(item.price);
      });
      setTotal(totalPrice.toFixed(2));
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const deleteOrder = async (id) => {
    let isDelete = window.confirm(
      "Are you sure? This item will be removed from your order!"
    );
    if (isDelete) {
      try {
        await axios.delete(`http://localhost:5000/orderItem/${id}`);
        loadItems();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  const incDec = async (qty, id, action, title, price, image) => {
    let newQty = qty;
    if (action === "dec") {
      newQty = qty > 1 ? qty - 1 : 1;
    } else {
      if (qty < 20) {
        newQty += 1;
      } else {
        alert("Quantity cannot exceed 20!");
        return;
      }
    }
    const order = { title, price, qty: newQty, image };
    try {
      await axios.put(`http://localhost:5000/orderItem/${id}`, order);
      loadItems();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {items.length === 0 ? (
            <h4 className="m-5 text-center">You have not made an order yet.</h4>
          ) : (
            <table
              className="table border-1 text-dark"
              style={{ margin: "15px", border: "2px solid gray" }}
            >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Title</th>
                  <th className="m-2">Quantity</th>
                  <th className="m-2">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.image} className={style.imgtable} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <button
                        className={style.incbutton}
                        onClick={() => incDec(item.qty, item.id, "dec", item.title, item.price, item.image)}
                      >
                        -
                      </button>
                      <input type="text" className={style.qtybuton} value={item.qty} readOnly />
                      <button
                        className={style.incbutton}
                        onClick={() => incDec(item.qty, item.id, "inc", item.title, item.price, item.image)}
                      >
                        +
                      </button>
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="border-0 mx-2 mt-1"
                        style={{ height: "30px", backgroundColor: "white", marginBottom: "10px" }}
                        onClick={() => deleteOrder(item.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="currentColor"
                          className="bi bi-x-octagon"
                          viewBox="0 0 16 16"
                          style={{ color: "red" }}
                        >
                          <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          
        </div>
        <div
          className="col-3"
          style={{
            backgroundColor: "#fff",
            marginLeft: "30px",
            width: "390px",
            height: "700px",
          }}
        >
          <form  class="row g-3" className={style.flexab}>
            <div className={style.card}>
              <h1 style={{ color: "  #1A110B", fontSize: "35px" }}>Customer Data</h1>
              <hr />

                  <div class="col-md-12">
                  <label for="userName" class="form-label">User Name</label>
                  <input type="name" class="form-control" id="userName"/>
                </div>           
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Address</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div class="col-md-12">
                <label for="inputZip" class="form-label">Promo Code</label>
                <input type="text" class="form-control" id="inputZip"/>
              </div>
                <hr />
                <h5 style={{ color: "rgb(31, 55, 82)", fontSize: "18px" }}>
                  Total Cost={total}$
                </h5>
                <button className={style.checkout}
                    onClick={() => alert("Your Order Made Successfully")}
                >CheckOut</button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
