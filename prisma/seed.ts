import {PrismaClient} from "@prisma/client";import bcrypt from "bcryptjs";
const db=new PrismaClient();
async function main(){const email=process.env.ADMIN_EMAIL||"admin@ganvesystechnologies.com";const password=process.env.ADMIN_PASSWORD||"change-this-before-production";const hash=await bcrypt.hash(password,12);await db.user.upsert({where:{email},update:{passwordHash:hash,role:"SUPER_ADMIN"},create:{name:"GANVESYS Admin",email,passwordHash:hash,role:"SUPER_ADMIN"}});console.log("Admin ready:",email)}
main().finally(()=>db.$disconnect());