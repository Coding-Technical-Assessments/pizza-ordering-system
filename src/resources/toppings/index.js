import { ucwords } from "@/utils/helpers/manipulations/string";

export const toppingResource = (topping) => {
  return {
    id: topping.toppingId,
    name: ucwords(topping.name),
    price: topping.price,
  };
};

// Multiple users records
export const toppingCollection = (toppings) => {
  return toppings.map((topping) => toppingResource(topping));
};
