// Single user records
export const userResource = (user) => {
  return {
    id: user.userId,
    name: user.name,
    surname: user.surname,
    email: user.email,
  };
};

// Multiple users records
export const userCollection = (users) => {
  return users.map((user) => userResource(user));
};
