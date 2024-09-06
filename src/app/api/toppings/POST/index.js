import { prismaClient } from "@/config/prisma";
import { NextResponse } from "next/server";
import { formatToppingCreateData } from "@/utils/helpers/toppings/formatToppingData";
import { toppingSchema } from "@/utils/validations/schema/topping";
import { toppingResource } from "@/resources/toppings";

export const handlePOST = async (request) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 422 }
      );

    var formattedToppingCreateData = formatToppingCreateData(body);

    try {
      await toppingSchema.validate(formattedToppingCreateData, {
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

    const newTopping = await prismaClient.topping.create({
      data: {
        name: formattedToppingCreateData.name,
        price: formattedToppingCreateData.price,
      },
    });

    return NextResponse.json(toppingResource(newTopping), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      // Prisma error code for unique constraint violation
      return NextResponse.json(
        { error: `Topping with name ${formattedToppingCreateData.name} already exists` },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: `Failed to create topping: ${error.message}` },
      { status: 500 }
    );
  }
};
