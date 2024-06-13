import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const workPlace = await prisma.workPlace.findUnique({
      where: { id: Number(params.id) },
    });

    if (!workPlace)
      return NextResponse.json(
        { message: "Work place not found" },
        { status: 404 }
      );

    return NextResponse.json({ data: workPlace }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch user, please try again later" },
      { status: 500 }
    );
  }
};
