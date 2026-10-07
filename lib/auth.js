import {SignJWT, jwtVerify} from "jose";
import bcrypt from "bcryptjs";

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || "development-secret-change-me"
);

export async function hashPassword(password) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

export async function signSession(user) {
  return new SignJWT({
    sub: user.id,
    email: user.email,
    role: user.role
  })
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret);
}

export async function verifySession(token) {
  try {
    return (await jwtVerify(token, secret)).payload;
  } catch {
    return null;
  }
}
