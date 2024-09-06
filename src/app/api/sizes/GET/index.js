import { prismaClient } from "@/config/prisma";
import { sizeCollection } from "@/resources/sizes";
import { NextResponse } from "next/server";

export const handleGET = async () => {
  try {
    const sizes = await prismaClient.size.findMany();

    return NextResponse.json({ sizes: sizeCollection(sizes) }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch sizes" + error },
      { status: 500 }
    );
  }
};
