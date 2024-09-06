import axios from "axios";

export const fetchToppings = async () => {
  try {
    const response = await axios.get(`/api/toppings`);

    return response.data;
  } catch (error) {
    return error;
  }
};
