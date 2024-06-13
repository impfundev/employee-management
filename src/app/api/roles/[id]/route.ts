import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const role = await prisma.role.findUnique({
      where: { id: Number(params.id) },
    });

    if (!role)
      return NextResponse.json({ message: "Role not found" }, { status: 404 });

    return NextResponse.json({ data: role }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch role, please try again later" },
      { status: 500 }
    );
  }
};
