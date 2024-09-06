import { ucwords } from "@/utils/helpers/manipulations/string";

export const pizzaResource = (pizza) => {
  return {
    id: pizza.pizzaId,
    name: ucwords(pizza.name),
    price: pizza.price,
    image: pizza.image,
    description: ucwords(pizza.description),
  };
};

export const pizzaCollection = (pizzas) => {
  return pizzas.map((pizza) => pizzaResource(pizza));
};
