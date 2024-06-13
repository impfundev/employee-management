import { extendToken, signToken, verifyToken } from "../services/jwt";
import { User } from "@prisma/client";
import { jest } from "@jest/globals";
import jwt from "jsonwebtoken";

describe("JWT Service", () => {
  const now = new Date();
  const mockUser: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "1234567890",
    photo: null,
    password: "password123",
    createAt: now,
    updateAt: now,
    lastLoginAt: now,
    roleId: 3,
  };

  beforeEach(() => {
    jest.resetModules();
    process.env.JWT_SECRET = "testSecret";
  });

  it("should generate a JWT token with correct payload", () => {
    const token = signToken(mockUser);
    expect(token).toBeDefined();
    const decoded = verifyToken(token);
    expect(decoded.sub).toBe(mockUser.id);
    expect(decoded.name).toBe(mockUser.name);
    expect(decoded.email).toBe(mockUser.email);
    expect(decoded.phone).toBe(mockUser.phone);
    expect(decoded.photo).toBe(mockUser.photo);
    expect(decoded.roleId).toBe(mockUser.roleId);
  });

  it("should set the token expiration time to 30 minutes", () => {
    const token = signToken(mockUser);
    const decoded = verifyToken(token);
    expect(decoded.exp).toBeDefined();
    expect(decoded.exp).toBeLessThanOrEqual(Date.now() / 1000 + 1800); // 30 minutes in seconds
  });

  it("should extend the token expiration if expiration time 10 minutes", () => {
    const payload = {
      sub: mockUser.id,
      name: mockUser.name,
      email: mockUser.email,
      phone: mockUser.phone,
      photo: mockUser.photo,
      roleId: mockUser.roleId,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "9m",
    });
    const extend = extendToken(token);
    expect(extend).not.toBeNull();
  });
});
