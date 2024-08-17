import React, { useEffect, useRef, useState, useContext } from "react";
import ProductsContext from "../../ContextAPIs/ProductsContext";
import { Alert } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Styles/AddProduct.css";

function AddProducts() {
  const inputRef = useRef(null);
  const [product, setProduct] = useState({
    id: Math.random().toString(36).substring(2, 9),
    title: "",
    price: "",
    discountPercentage: "",
    description: "",
    stock: "",
    thumbnail:
      "https://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png",
    category: "",
  });

  const { addProduct } = useContext(ProductsContext);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setAlertMessage("Product added successfully!");
    setProduct({
      id: Math.random().toString(36).substring(2, 9),
      title: "",
      price: "",
      discountPercentage: "",
      description: "",
      stock: "",
      thumbnail:
        "https://bookworlduae.com/cdn/shop/files/IMG-0742.jpg?v=1723547578&width=713",
      category: "",
    });
  };

  return (
    <div className="container p-3 p-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="p-4 shadow-lg rounded-5">
            <h1 className="text-center">Add Product</h1>
            {alertMessage && (
              <Alert
                variant="filled"
                severity="success"
                onClose={() => setAlertMessage("")}
                style={{ marginBottom: "1rem" }}
              >
                {alertMessage}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={product.title}
                  onChange={handleChange}
                  ref={inputRef}
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="discountPercentage" className="form-label">
                  Discount Percentage
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="discountPercentage"
                  name="discountPercentage"
                  value={product.discountPercentage}
                  onChange={handleChange}
                  placeholder="Enter discount percentage"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Quantity
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="stock"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  placeholder="Enter quantity"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  placeholder="Enter category"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  placeholder="Enter description"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">
                  Image Url
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="thumbnail"
                  name="thumbnail"
                  value={product.thumbnail}
                  onChange={handleChange}
                  placeholder="Enter image url"
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#B59B82",
                  borderColor: "#8B7866",
                  color: "white",
                }}
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
