import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
    const { email, password } = await request.json();

    const user = await prisma.user.create({
        data: {
            email,
            password
        }
    })

    return NextResponse.json({ message: "User created successfully", user })
}
export async function GET() {

    const user = await prisma.user.findMany()

    return NextResponse.json({ users: user })
}

export async function DELETE(id) {

    const deleteUser = await prisma.user.delete({
        where: {
            id: id
        }
    })

    // return NextResponse.json({ message: "User deleted" }, { status: 200 })
    return deleteUser
}
