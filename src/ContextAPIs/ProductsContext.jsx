import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const { children } = props;
  const navigate = useNavigate();
  
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  const getProducts = () => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const getProductById = (productId) => {
    axios
      .get(`http://localhost:5000/products/${productId}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:5000/products/${productId}`)
      .then(() => getProducts())
      .catch((err) => console.log(err));
  };

  const addProduct = (product) => {
    axios.post(`http://localhost:5000/products`, product)
      .then(() => {
        getProducts();
       
      })
      .catch((err) => console.log(err));
  };

  const getUserSpecificOrders = () => {
    // Fetch orders specific to the logged-in user
    return axios.get(`http://localhost:5000/orderItem?userId=${userId}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        getProducts,
        getProductById,
        deleteProduct,
        addProduct,
        getUserSpecificOrders, // Provide this function to other components
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
