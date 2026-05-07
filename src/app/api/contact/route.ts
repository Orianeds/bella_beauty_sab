import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { firstName, lastName, email, subject, message } = body;

  if (!email || !message) {
    return NextResponse.json(
      { error: 'Champs requis manquants' },
      { status: 400 }
    );
  }

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev', // pour test
    to: process.env.FORM_RECEIVER!,
    reply_to: email, // permet de répondre directement à l'expéditeur
    subject: `[Contact] ${subject}`,
    html: `
      <p><strong>Nom :</strong> ${lastName}</p>
      <p><strong>Prénom :</strong> ${firstName}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Sujet :</strong> ${subject}</p>
      <p><strong>Message :</strong><br/>${message}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}