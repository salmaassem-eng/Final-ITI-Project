import axios from "axios";

const productsUrl = "http://localhost:5000/orderItem";

export const fetchCartItems = async () => {
    try {
        const response = await axios.get(productsUrl);
        return response.data; // Return the data so that the caller can use it
    } catch (error) {
        console.error("Error fetching cart items:", error);
        throw error; // Throw the error so it can be handled by the caller
    }
};
