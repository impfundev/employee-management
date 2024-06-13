import { cookies } from "next/headers";
import { extendToken, verifyToken } from "./jwt";

export const createSessions = (token: string) => {
  const now = new Date();
  cookies().set("session", token, {
    httpOnly: true,
    secure: false, // should true in production
    maxAge: now.getTime() + 30 * 60 * 1000,
  });
};

export const getSession = () => {
  const session = cookies().get("session");
  if (!session) return null;

  const payload = verifyToken(session.value);
  return payload;
};

export const deleteSession = () => {
  cookies().delete("session");
};

export const isAuthenticated = () => {
  const session = cookies().get("session");
  if (!session) return false;
  return true;
};

export const extendSession = () => {
  const session = cookies().get("session");
  if (!session) return null;

  const newToken = extendToken(session.value);
  if (!newToken) return null;

  createSessions(newToken);
};
