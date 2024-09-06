import { prismaClient } from "@/config/prisma";
import { orderCollection } from "@/resources/orders";
import { NextResponse } from "next/server";

export const handleGET = async () => {
  try {
    const orders = await prismaClient.order.findMany();

    return NextResponse.json(orderCollection(orders), { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch order " + error },
      { status: 500 }
    );
  }
};
