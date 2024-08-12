import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



export async function POST(request) {
  try {
    // const { name, email, message } = await request.json();
    
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "guvensemra9@gmail.com",
          pass: "asilzade123",
        },
      });
    
      var mailOptions = {
        from: "guvensemra9@gmail.com",
        to: "www.mehidi.me@gmail.com",
        subject: "test",
        text: "test",
      };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message. "+error, { status: 500 })
  }
}