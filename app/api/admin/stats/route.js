import {cookies} from "next/headers";
import {verifySession} from "../../../../lib/auth";
import {NextResponse} from "next/server";import {prisma} from "../../../../lib/prisma";
export async function GET(){
  const token=cookies().get("gv_session")?.value;
  const u=token?await verifySession(token):null;
  if(!u)return Response.json({error:"Unauthorized"},{status:401});
  try{const [total,newLeads,won]=await Promise.all([prisma.lead.count(),prisma.lead.count({where:{status:"NEW"}}),prisma.lead.count({where:{status:"WON"}})]);return NextResponse.json({total,newLeads,won})}catch(e){return NextResponse.json({total:0,newLeads:0,won:0})}}
