import prisma from "@/services/prisma_client";
import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcrypt";

export const POST = async (req: NextRequest) => {
  const { name, email, phone, password } = await req.json();

  try {
    // 1. Check is email already used
    const isEmailUsed = await prisma.user.findUnique({
      where: { email },
    });

    if (isEmailUsed)
      return NextResponse.json(
        { message: "Email already used, please use another email" },
        { status: 400 }
      );

    // 2. Check is phone number is already used
    const isPhoneUsed = await prisma.user.findUnique({
      where: { phone },
    });

    if (isPhoneUsed)
      return NextResponse.json(
        {
          message: "Phone number already used, please use another phone number",
        },
        { status: 400 }
      );

    // 3. Create User

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: bcrypt.hashSync(password, 8),
        role: {
          connect: { id: 3 },
        },
      },
    });

    // 4. Login
    const login = await fetch(`${process.env.baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!login.ok)
      return NextResponse.json(
        {
          message:
            "User successfully created, but login failed. Please try login later",
        },
        { status: 500 }
      );

    return NextResponse.json({
      message: "User successfully created",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Register failed, please try again later" },
      { status: 500 }
    );
  }
};
