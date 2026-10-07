import {cookies} from "next/headers";
import {verifySession} from "../../../../lib/auth";
import {NextResponse} from "next/server";import {prisma} from "../../../lib/prisma";
export async function POST(req){try{const b=await req.json();if(!b.name||!b.email||!b.message)return NextResponse.json({error:"Missing required fields"},{status:400});const lead=await prisma.lead.create({data:{name:b.name,email:b.email,company:b.company||null,phone:b.phone||null,service:b.service||null,message:b.message,source:"WEBSITE"}});return NextResponse.json(lead,{status:201})}catch(e){return NextResponse.json({error:"Database unavailable"},{status:500})}}
export async function GET(){
  const token=cookies().get("gv_session")?.value;
  const u=token?await verifySession(token):null;
  if(!u)return NextResponse.json({error:"Unauthorized"},{status:401});
  try{return NextResponse.json(await prisma.lead.findMany({orderBy:{createdAt:"desc"}}))}catch(e){return NextResponse.json({error:"Database unavailable"},{status:500})}
}
