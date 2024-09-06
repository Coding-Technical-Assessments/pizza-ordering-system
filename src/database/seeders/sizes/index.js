const sizes = ["small", "medium", "large"];
import { prismaClient } from "@/config/prisma";

export const seedSizes = async () => {
  for (const size of sizes) {
    await prismaClient.size.create({
      data: {
        name: size,
      },
    });
  }
};
