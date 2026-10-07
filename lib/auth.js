import {SignJWT,jwtVerify} from "jose";
import bcrypt from "bcryptjs";
const secret=new TextEncoder().encode(process.env.AUTH_SECRET||"development-secret-change-me");
export async function hashPassword(p){return bcrypt.hash(p,12)}
export async function verifyPassword(p,h){return bcrypt.compare(p,h)}
export async function signSession(user){return new SignJWT({sub:user.id,email:user.email,role:user.role}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("8h").sign(secret)}
export async function verifySession(token){try{return (await jwtVerify(token,secret)).payload}catch{return null}}