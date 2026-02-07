import { adminAuth } from "@/helpers/firebase/admin";
import { NextResponse } from "next/server";

export async function GET() {
    const { users } = await adminAuth.listUsers(1000);
    return NextResponse.json(users);
}
