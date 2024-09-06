import axios from "axios";

export const fetchPizzas = async () => {
  try {
    const response = await axios.get(`/api/pizzas`);

    return response.data;
  } catch (error) {
    return error;
  }
};
