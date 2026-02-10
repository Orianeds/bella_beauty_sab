import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const body = await req.json();

  const { firstName, lastName, email, subject, message } = body;

  if (!email || !message) {
    return NextResponse.json(
      { error: 'Champs requis manquants' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Contact site" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `[Contact] ${subject}`,
    html: `
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong><br/>${message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
