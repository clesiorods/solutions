import prisma from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {

    const {id, completed} = await req.json()

    await prisma.todo.update({
        where: {
            id: parseInt(id),
        },
        data: {
            completed: completed,
        },
    });

    return NextResponse.json({ message: "Updated" })
}