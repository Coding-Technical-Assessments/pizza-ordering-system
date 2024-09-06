import { prismaClient } from "@/config/prisma";

const sizes = [
  { name: "small", price: 10 },
  { name: "medium", price: 15 },
  { name: "large", price: 20 },
];

export const seedSizes = async () => {
  for (const size of sizes) {
    await prismaClient.size.create({
      data: {
        name: size.name,
        price: size.price,
      },
    });
  }
};
