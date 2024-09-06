import { prismaClient } from "@/config/prisma";

const toppings = [
  { name: "Pepperoni", price: 12 },
  { name: "Mushrooms", price: 8 },
  { name: "Onions", price: 6 },
  { name: "Sausage", price: 14 },
  { name: "Bacon", price: 13 },
  { name: "Extra Cheese", price: 10 },
  { name: "Black Olives", price: 7 },
  { name: "Green Peppers", price: 9 },
  { name: "Pineapple", price: 11 },
  { name: "Chicken", price: 14 },
];

export const seedToppings = async () => {
  for (const topping of toppings) {
    await prismaClient.topping.create({
      data: {
        name: topping.name,
        price: topping.price,
      },
    });
  }
};
