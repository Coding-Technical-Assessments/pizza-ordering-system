import { NextResponse } from "next/server";
import { seedSizes } from "./sizes";
import { seedToppings } from "./toppings";
import { seedBases } from "./bases";
import { seedPizzas } from "./pizzas";

export const seed = async () => {
  try {
    await seedSizes();
    await seedToppings();
    await seedBases();
    await seedPizzas();

    return NextResponse.json({ message: "Seeding completed successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Seeding failed", details: error.message },
      { status: 500 }
    );
  }
};
