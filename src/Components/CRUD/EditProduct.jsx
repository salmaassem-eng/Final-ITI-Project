import axios from "axios";
import React, { useId, useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "@mui/material";

function EditProducts() {
  const inputRef = useRef(null);
  const [prdct, setPrdct] = useState({
    id: useId(),
    title: "",
    price: 0,
    discountPercentage: 0,
    description: "",
    stock: 0,
    thumbnail:
      "https://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png",
    category: "",
  });
  const [success, setSuccess] = useState(false);
  const navigator = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${id}`);
        setPrdct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrdct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${prdct.id}`, prdct);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigator("/shop");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container p-3 p-md-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="p-3 p-md-4 shadow-lg rounded-5">
            <h1 className="text-center">Edit Product</h1>
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
                  value={prdct.title}
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
                  value={prdct.price}
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
                  value={prdct.discountPercentage}
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
                  value={prdct.stock}
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
                  value={prdct.category}
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
                  value={prdct.description}
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
                  value={prdct.thumbnail}
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
                Edit
              </button>
            </form>
            {success && (
              <Alert severity="success" className="mt-3">
                Product updated successfully!
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProducts;
