import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    try {
        return NextResponse.json({ message: "test" })


    }
    catch (error) {
        console.log(error)
        return NextResponse.json({ message: error })
    }
}