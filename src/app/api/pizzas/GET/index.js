import { prismaClient } from "@/config/prisma";
import { pizzaCollection } from "@/resources/pizzas";
import { NextResponse } from "next/server";

export const handleGET = async () => {
  try {
    const pizzas = await prismaClient.pizza.findMany();

    return NextResponse.json(
      { pizzas: pizzaCollection(pizzas) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch pizzas" + error },
      { status: 500 }
    );
  }
};
