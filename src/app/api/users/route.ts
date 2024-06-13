import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;
  const startIndex = (page - 1) * limit;
  const totalRecords = await prisma.user.count();
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

    let users = await prisma.user.findMany({
      take: limit,
      skip: startIndex,
      orderBy: {
        id: order === "desc" || order === "asc" ? order : undefined,
      },
      include: {
        employee: {
          include: {
            position: true,
            workPlace: true,
          },
        },
        role: true,
      },
    });

    if (search)
      users = users.filter(
        (user) =>
          user.name.toLowerCase().match(search.toLowerCase()) ||
          user.email.toLowerCase().match(search.toLowerCase()) ||
          user.phone.toLowerCase().match(search.toLowerCase())
      );

    return NextResponse.json({ data: users, result }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch users, please try again later" },
      { status: 500 }
    );
  }
};
