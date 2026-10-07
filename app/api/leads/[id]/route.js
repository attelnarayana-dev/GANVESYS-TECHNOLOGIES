import {prisma} from "../../../../lib/prisma";
import {cookies} from "next/headers";
import {verifySession} from "../../../../lib/auth";

async function user(){
  const t=cookies().get("gv_session")?.value;
  return t?verifySession(t):null;
}

export async function PATCH(req,{params}){
  const u=await user();
  if(!u)return Response.json({error:"Unauthorized"},{status:401});
  const b=await req.json();
  const lead=await prisma.lead.update({
    where:{id:params.id},
    data:{status:b.status,assignedTo:b.assignedTo??undefined}
  });
  await prisma.auditLog.create({
    data:{action:"LEAD_UPDATED",userId:u.sub,entityId:lead.id,metadata:JSON.stringify(b)}
  });
  return Response.json(lead);
}
