import { prismaClient } from "@/config/prisma";
import { NextResponse } from "next/server";
import { formatSizeCreateData } from "@/utils/helpers/validation-preparation/size";
import { sizeSchema } from "@/utils/validations/schema/size";
import { sizeResource } from "@/resources/sizes";

export const handlePOST = async (request) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 422 }
      );

    var formattedSizeCreateData = formatSizeCreateData(body);

    try {
      await sizeSchema.validate(formattedSizeCreateData, {
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

    const newSize = await prismaClient.size.create({
      data: {
        name: formattedSizeCreateData.name,
      },
    });

    return NextResponse.json(sizeResource(newSize), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      // Prisma error code for unique constraint violation
      return NextResponse.json(
        { error: `Size ${formattedSizeCreateData.name} already exists` },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: `Failed to create size: ${error.message}` },
      { status: 500 }
    );
  }
};
