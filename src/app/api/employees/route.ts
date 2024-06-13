import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const startIndex = (page - 1) * limit;
  const totalRecords = await prisma.employee.count();
  const totalPages = Math.ceil(totalRecords / limit);
  const currentPage = page || 0;
  const previousPage = page > 1 ? page - 1 : null;
  const nextPage = page < totalPages ? page + 1 : null;
  const range = currentPage * limit;
  const order = searchParams.get("order");
  const search = searchParams.get("search");

  let result = {
    totalRecords,
    totalPages,
    currentPage,
    previousPage,
    nextPage,
    range,
  };

  try {
    if (page > totalPages)
      return NextResponse.json({
        message: "Page not found",
      });

    if (page < 0)
      return NextResponse.json({
        message: "Page should not be negative",
      });

    let employee = await prisma.employee.findMany({
      take: limit,
      skip: startIndex,
      orderBy: {
        id: order === "desc" || order === "asc" ? order : undefined,
      },
      include: {
        user: {
          include: {
            role: true,
          },
        },
        position: true,
        workPlace: true,
      },
    });

    if (search)
      employee = employee.filter(
        (employee) =>
          employee.user.name.toLowerCase().match(search.toLowerCase()) ||
          employee.user.email.toLowerCase().match(search.toLowerCase()) ||
          employee.user.phone.toLowerCase().match(search.toLowerCase()) ||
          employee.workPlace.place.toLowerCase().match(search.toLowerCase()) ||
          employee.position.title.toLowerCase().match(search.toLowerCase())
      );

    return NextResponse.json(
      {
        data: employee,
        result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch employee, please try again later" },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const { name, email, phone, password, position, workPlace } =
    await req.json();

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: bcrypt.hashSync(password, 8),
        role: {
          connect: {
            name: "EMPLOYEE",
          },
        },
        employee: {
          create: {
            position: {
              connect: {
                title: position,
              },
            },
            workPlace: {
              connect: {
                place: workPlace,
              },
            },
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Employee created successfully",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create employee, please try again later" },
      { status: 500 }
    );
  }
};
