import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (request, {params}) =>{
    const {id} = params;

    const userData = await prisma.user.findUnique({
        where: {id}
    });
    return NextResponse.json(userData)
}

// export const DELETE = async (request) =>{
//     const id = request.nextUrl.searchParams.get("id");
//     await prisma.user.delete({
//         where:{id:id}
//     });
//     return NextResponse.json({message: 'Record was successfully deleted'},{status:200})
// }










export const DELETE = async (request, {params}) =>{
    const {id} = params;
    await prisma.user.delete({
        where:{id}
    });
    return NextResponse.json({message: 'Record was successfully deleted'},{status:201})
}