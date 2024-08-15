import React, { useEffect, useId, useRef, useState, useContext } from "react";
import ProductsContext from "../../ContextAPIs/ProductsContext";
import "bootstrap/dist/css/bootstrap.min.css";

function AddProducts() {
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

  const { addProduct } = useContext(ProductsContext);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPrdct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(prdct);
  };

  const formFields = [
    { id: "title", label: "Name", type: "text" },
    { id: "price", label: "Price", type: "number" },
    { id: "discountPercentage", label: "Discount Percentage", type: "number" },
    { id: "stock", label: "Quantity", type: "number" },
    { id: "category", label: "Category", type: "text" },
    { id: "description", label: "Description", type: "text" },
    { id: "thumbnail", label: "Image Url", type: "text" },
  ];

  return (
    <div className="containe justify-content-center align-content-center">
      <div className="card p-4 shadow-sm" style={{ maxWidth: "1000px" }}>
        <h1 className="card-title text-center mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          {formFields.map(({ id, label, type }) => (
            <div className="mb-3" key={id}>
              <label htmlFor={id} className="form-label">
                {label}
              </label>
              <input
                type={type}
                className="form-control"
                id={id}
                name={id}
                value={prdct[id]}
                onChange={handleChange}
                ref={id === "title" ? inputRef : null}
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            </div>
          ))}
          <button className="btn btn-primary w-100">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;
