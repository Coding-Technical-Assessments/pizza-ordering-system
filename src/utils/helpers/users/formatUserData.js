export const formatUserCreateData = (data) => {
  const newObj = {};

  Object.entries(data).forEach(([key, value]) => {
    if (
      typeof value === "string" &&
      key !== "password" &&
      key !== "passwordConfirmation"
    ) {
      newObj[key] = value.toLowerCase();
    } else if (typeof value === "object" && value !== null) {
      newObj[key] = formatUserCreateData(value);
    } else {
      newObj[key] = value;
    }
  });

  return newObj;
};
