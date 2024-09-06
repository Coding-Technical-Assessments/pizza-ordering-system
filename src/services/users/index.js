import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`/api/users`);

    return response.data;
  } catch (error) {
    return error;
  }
};
