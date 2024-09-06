import { prismaClient } from "@/config/prisma";
import { userCollection } from "@/resources/users";
import { NextResponse } from "next/server";

export const handleGET = async () => {
  try {
    const users = await prismaClient.user.findMany();

    return NextResponse.json(userCollection(users), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users " + error },
      { status: 500 }
    );
  }
};
