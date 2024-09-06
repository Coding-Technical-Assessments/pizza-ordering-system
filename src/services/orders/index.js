import axios from "axios";

export const fetchOrders = async () => {
  try {
    const response = await axios.get(`/api/orders`);

    return response.data;
  } catch (error) {
    return error;
  }
};
