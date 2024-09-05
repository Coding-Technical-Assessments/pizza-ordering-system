// Single user records
export const pizzaResource = (pizza) => {
  return {
    id: pizza.pizzaId,
    name: pizza.name,
    price: pizza.price,
    image: pizza.image,
  };
};

// Multiple users records
export const pizzaCollection = (pizzas) => {
  return pizzas.map((pizza) => pizzaResource(pizza));
};
