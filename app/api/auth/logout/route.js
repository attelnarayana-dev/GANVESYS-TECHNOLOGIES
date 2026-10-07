import {cookies} from "next/headers";
export async function POST(){
  cookies().set("gv_session","",{httpOnly:true,maxAge:0,path:"/"});
  return Response.json({success:true});
}
