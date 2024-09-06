export const formatToppingCreateData = (data) => {
  const newObj = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === "string") {
      newObj[key] = value.toLowerCase();
    } else if (typeof value === "object" && value !== null) {
      newObj[key] = formatToppingCreateData(value);
    } else {
      newObj[key] = value;
    }
  });

  return newObj;
};
