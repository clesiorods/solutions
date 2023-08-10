import { NextResponse } from "next/server";

export async function GET() {
    // return new Response("Olá mundo", {status:200});
    return NextResponse.json({message: 'Olá mundo'})
}