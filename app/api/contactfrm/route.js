import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: 'ashimlugun09@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("sended")
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
