import { NextResponse } from "next/server"
export async function GET(){
    // return new Response("Hello, nextJs")
    return NextResponse.json({"message" : "Hello, nextJs 2"})
}