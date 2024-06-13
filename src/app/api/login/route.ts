import prisma from "@/services/prisma_client";
import status from "http-status";
import * as bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { createSessions } from "@/services/session";
import { signToken } from "@/services/jwt";

export const POST = async (req: NextRequest) => {
  let user;
  const { email, phone, password } = await req.json();

  try {
    // 1. Verify Email or Phone
    if (phone) {
      user = await prisma.user.findUnique({
        where: { phone },
      });
      if (!user)
        return NextResponse.json(
          { message: "Phone Number Invalid, please enter valid Phone Number" },
          {
            status: status.BAD_REQUEST,
          }
        );
    }

    user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user)
      return NextResponse.json(
        { message: "Email Invalid, please enter valid Email" },
        {
          status: status.BAD_REQUEST,
        }
      );

    // 2. Verify Password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      return NextResponse.json(
        { message: "Password Invalid, please enter valid Password" },
        {
          status: status.BAD_REQUEST,
        }
      );

    // 3. Sign JWT Token
    const token = signToken(user);

    // 4. Create Session
    createSessions(token);

    // 5. Update last login date
    await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLoginAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: "Sign In Success" },
      {
        status: status.OK,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sign In Failed, please try again later." },
      {
        status: status.INTERNAL_SERVER_ERROR,
      }
    );
  }
};
