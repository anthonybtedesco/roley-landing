import { NextRequest, NextResponse } from "next/server";
import prisma from "@app/lib/prisma";

const handler = async (req: NextRequest) => {
    if (req.method === "POST") {
        const newContact = await req.json();
        const {firstName, lastName, email, phone} = newContact;
        const newUser = await prisma.user.upsert({
            where: {"email": email},
            update: {},
            create: {
                "first_name":firstName, 
                "last_name": lastName, 
                "email": email, 
                "phone": phone
            }
        });
        return NextResponse.json(newUser);
    }
};

export {handler as POST};
