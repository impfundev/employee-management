import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export const signToken = (user: User) => {
  const payload = {
    sub: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    photo: user.photo,
    roleId: user.roleId,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: "30m",
  });

  return token;
};

export const verifyToken = (token: string) => {
  const payload = jwt.verify(token, process.env.JWT_SECRET!);
  return payload;
};

export const extendToken = (token: string) => {
  const payload: any = jwt.verify(token, process.env.JWT_SECRET!);

  const is10MinutesBeforeExpiration = payload.exp >= Date.now() / 1000 + 600;

  if (is10MinutesBeforeExpiration) {
    return null;
  }

  const newToken = signToken(payload);
  return newToken;
};
