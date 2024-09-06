import { prismaClient } from "@/config/prisma";

const pizzas = [
  {
    name: "classic cheese",
    price: 20,
    description: "tomato base & mozarella cheese",
    image:
      "https://cdn.romanspizza.co.za/images/root/v2/pizza/pizza-classic-pan.png",
  },

  {
    name: "margherita",
    price: 21,
    description: "tomato base, olive oil, origanum & garlic",
    image:
      "https://cdn.romanspizza.co.za/images/root/v2/pizza/pizza-margherita-pan.png",
  },

  {
    name: "regina",
    price: 22,
    description: "tomato base, ham & mushroom",
    image:
      "https://cdn.romanspizza.co.za/images/root/v2/pizza/pizza-regina-pan.png",
  },

  {
    name: "pepperoni deluxe",
    price: 23,
    description: "Tomato base, pepperoni & garlic",
    image:
      "https://cdn.romanspizza.co.za/images/root/v2/pizza/pizza-pepperoni-deluxe-pan.png",
  },
];

export const seedPizzas = async () => {
  for (const pizza of pizzas) {
    await prismaClient.pizza.create({
      data: {
        name: pizza.name,
        price: pizza.price,
        description: pizza.description,
        image: pizza.image,
      },
    });
  }
};
