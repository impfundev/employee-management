import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const position = await prisma.position.findUnique({
      where: { id: Number(params.id) },
    });

    if (!position)
      return NextResponse.json(
        { message: "Position not found" },
        { status: 404 }
      );

    return NextResponse.json({ data: position }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch position, please try again later" },
      { status: 500 }
    );
  }
};
