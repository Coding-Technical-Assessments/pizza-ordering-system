const bcrypt = require("bcrypt");
const saltRounds = 10;

export const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    return {
      error: error,
    };
  }
};
