import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({message: 'Olá mundo'})
}

export async function POST(req:Request) {
    const body = await req.json();
    const {email} = body;

    try {
        const resp = await prisma.subscriber.create({data: {
            email: email
        }})
        return NextResponse.json({resp});
    } catch (error) {
        return NextResponse.error();
    }
}