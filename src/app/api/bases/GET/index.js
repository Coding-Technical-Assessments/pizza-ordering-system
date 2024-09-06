import { prismaClient } from "@/config/prisma";
import { baseCollection } from "@/resources/bases";
import { sizeCollection } from "@/resources/sizes";
import { NextResponse } from "next/server";

export const handleGET = async () => {
  try {
    const bases = await prismaClient.base.findMany();

    return NextResponse.json({ bases: baseCollection(bases) }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch bases" + error },
      { status: 500 }
    );
  }
};
