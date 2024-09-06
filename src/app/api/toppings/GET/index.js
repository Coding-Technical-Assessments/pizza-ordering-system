import { prismaClient } from "@/config/prisma";
import { toppingCollection } from "@/resources/toppings";
import { NextResponse } from "next/server";

export const handleGET = async () => {
  try {
    const toppings = await prismaClient.topping.findMany();

    return NextResponse.json(
      { toppings: toppingCollection(toppings) },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch toppings" + error },
      { status: 500 }
    );
  }
};
