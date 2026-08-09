import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, phone, email, country, remarks } = await request.json();

  // Basic server-side validation
  if (!name || !phone || !email || !country || !remarks) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 },
    );
  }

  const to = process.env.CONTACT_EMAIL;
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!to || !host || !user || !pass) {
    return NextResponse.json(
      { ok: false, error: "smtp_not_configured" },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transporter.sendMail({
      from: `"客户留言" <${user}>`,
      to,
      replyTo: email,
      subject: `[Website Inquiry] ${name} - ${phone}`,
      html: [
        `<h2>New inquiry from website</h2>`,
        `<table border="0" cellpadding="8" style="font-size:15px">`,
        `<tr><td><b>Name</b></td><td>${name}</td></tr>`,
        `<tr><td><b>Phone</b></td><td>${phone}</td></tr>`,
        `<tr><td><b>Email</b></td><td>${email}</td></tr>`,
        `<tr><td><b>Country</b></td><td>${country}</td></tr>`,
        `<tr><td><b>Remarks</b></td><td>${remarks}</td></tr>`,
        `</table>`,
        `<p style="color:#999;font-size:12px;margin-top:20px">Sent from sanzhili-pm.com contact form</p>`,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] mail send failed:", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 },
    );
  }
}
