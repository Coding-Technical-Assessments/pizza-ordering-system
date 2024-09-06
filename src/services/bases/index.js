import axios from "axios";

export const fetchBases = async () => {
  try {
    const response = await axios.get(`/api/bases`);

    return response.data;
  } catch (error) {
    return error;
  }
};
