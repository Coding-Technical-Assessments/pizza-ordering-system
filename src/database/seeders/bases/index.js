const bases = ["thin", "thick"];
import { prismaClient } from "@/config/prisma";

export const seedBases = async () => {
  for (const base of bases) {
    await prismaClient.base.create({
      data: {
        name: base,
      },
    });
  }
};
