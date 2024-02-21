import { NextRequest, NextResponse } from "next/server";
import prisma from "@app/lib/prisma";

const handler = async (req: NextRequest) => {
  if (req.method === "GET") {
    const count = await prisma.user.findMany();
    return NextResponse.json({"count": count.length});
  }
};

export { handler as GET };
