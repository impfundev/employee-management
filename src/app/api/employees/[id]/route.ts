import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const employee = await prisma.employee.findUnique({
      where: { id: Number(params.id) },
    });

    if (!employee)
      return NextResponse.json(
        { message: "Employee not found" },
        { status: 404 }
      );

    return NextResponse.json({ data: employee }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch employee, please try again later" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const data = await req.json();

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data,
    });

    return NextResponse.json(
      {
        message: "Employee updated successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update employee, please try again later" },
      { status: 500 }
    );
  }
};
