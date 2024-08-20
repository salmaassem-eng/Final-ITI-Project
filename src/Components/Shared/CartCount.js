// cartUtils.js
import axios from "axios";

export const fetchCartItems = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:5000/orderItem?userId=${userId}`);
    return response.data; // Ensure this returns an array of items
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return []; // Return an empty array in case of an error
  }
};
