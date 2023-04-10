import bcrypt from 'bcrypt';
import {NextResponse} from "next/server";
import prismadb from "@/lib/prismadb";
export async function POST(request: Request) {
  try {
    const {name, email, password} = await request.json();
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      }
    });
    if(existingUser) {
      return NextResponse.json(
          {
            message: "Email taken"
          }, {
            status: 422
          });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        name,
        email,
        emailVerified: new Date(),
        hashedPassword
      }
    })

    return NextResponse.json(user)
  }catch(err) {
    console.log(err);
  }
}
