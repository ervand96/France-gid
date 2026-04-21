import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(3).max(50),
  message: z.string().min(5).max(3000),
  honeypot: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !toEmail) {
      throw new Error("Missing ENV variables");
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    const { name, email, phone, message, honeypot } = parsed.data;

    if (honeypot?.trim()) {
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `Новое сообщение: ${name}`,
      html: `
        <h2>Новая заявка</h2>
        <p>${name}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
