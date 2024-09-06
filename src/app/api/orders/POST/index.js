import { prismaClient } from "@/config/prisma";
import { NextResponse } from "next/server";
import { pizzaSchema } from "@/utils/validations/schema/pizza";
import { formatPizzaCreateData } from "@/utils/helpers/pizzas/formatPizzaData";
import { pizzaResource } from "@/resources/pizzas";

export const handlePOST = async (request) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 422 }
      );

    var formattedOrderCreateData = formatPizzaCreateData(body);

    try {
      await pizzaSchema.validate(formattedOrderCreateData, {
        abortEarly: false,
      });
    } catch (validationError) {
      return NextResponse.json(
        {
          error: "Validations failed",
          details: validationError.errors || [],
        },
        { status: 422 }
      );
    }

    const newPizza = await prismaClient.pizza.create({
      data: {
        name: formattedPizzaCreateData.name,
        price: formattedPizzaCreateData.surname,
        image: formattedPizzaCreateData,
        description: formattedPizzaCreateData.description,
      },
    });

    return NextResponse.json(pizzaResource(newPizza), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      // Prisma error code for unique constraint violation
      return NextResponse.json(
        { error: `Pizza ${formattedPizzaCreateData.name} already exists` },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: `Failed to create pizza: ${error.message}` },
      { status: 500 }
    );
  }
};
