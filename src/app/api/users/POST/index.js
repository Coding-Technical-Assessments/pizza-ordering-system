import { prismaClient } from "@/config/prisma";
import { NextResponse } from "next/server";
import { formatUserCreateData } from "@/utils/helpers/users/formatUserData";
import { schema } from "@/utils/validations/schema/user";
import { hashPassword } from "@/utils/helpers/auth/passwordHasher";
import { userResource } from "@/resources/users";

export const handlePOST = async (request) => {
  try {
    const body = await request.json().catch(() => null);

    if (!body)
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 422 }
      );

    const formattedUserCreateData = formatUserCreateData(body);

    try {
      await schema.validate(formattedUserCreateData, {
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

    // Hash password
    const hashedPassword = await hashPassword(formattedUserCreateData.password);

    if (!typeof hashedPassword === "string")
      return NextResponse.json(
        { error: "Failed to hash password " + hashedPassword },
        { status: 422 }
      );

    const newUser = await prismaClient.user.create({
      data: {
        name: formattedUserCreateData.name,
        surname: formattedUserCreateData.surname,
        email: formattedUserCreateData.email,
        password: hashedPassword,
        role: formattedUserCreateData.role,
      },
    });

    return NextResponse.json(userResource(newUser), { status: 201 });
  } catch (error) {
    if (error.code === "P2002") {
      // Prisma error code for unique constraint violation
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: `Failed to create user: ${error.message}` },
      { status: 500 }
    );
  }
};
