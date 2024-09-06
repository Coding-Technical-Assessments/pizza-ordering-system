import { prismaClient } from "@/config/prisma";
import { NextResponse } from "next/server";
import { formatBaseCreateData } from "@/utils/helpers/validation-preparation/base";
import { baseSchema } from "@/utils/validations/schema/base";
import { baseResource } from "@/resources/bases";

export const handlePOST = async (request) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 422 }
      );

    var formattedBaseCreateData = formatBaseCreateData(body);

    try {
      await baseSchema.validate(formattedBaseCreateData, {
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

    const newBase = await prismaClient.base.create({
      data: {
        name: formattedBaseCreateData.name,
      },
    });

    return NextResponse.json(baseResource(newBase), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      // Prisma error code for unique constraint violation
      return NextResponse.json(
        { error: `Base ${formattedBaseCreateData.name} already exists` },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: `Failed to create base: ${error.message}` },
      { status: 500 }
    );
  }
};
