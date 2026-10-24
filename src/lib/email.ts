import { Resend } from "resend";

export function mailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM && process.env.CONTACT_TO_EMAIL);
}

export async function sendMail(input: { subject: string; text: string; replyTo?: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) return false;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject: input.subject,
    text: input.text,
    replyTo: input.replyTo,
  });
  if (error) throw new Error(error.message);
  return true;
}
