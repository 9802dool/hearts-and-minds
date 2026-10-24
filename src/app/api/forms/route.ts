import { NextResponse } from "next/server";
import { formSchema } from "@/lib/schemas";
import { mailConfigured, sendMail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = formSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  }

  if (parsed.data.companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  const lines = Object.entries(parsed.data)
    .filter(([key]) => key !== "companyWebsite")
    .map(([key, value]) => `${key}: ${value ?? ""}`);

  if (!mailConfigured()) {
    return NextResponse.json({ ok: true, emailed: false });
  }

  try {
    await sendMail({
      subject: `Hearts & Minds · ${parsed.data.form}`,
      text: lines.join("\n"),
      replyTo: parsed.data.email,
    });
  } catch {
    return NextResponse.json({ ok: false, errors: { form: ["The message could not be sent."] } }, { status: 502 });
  }

  return NextResponse.json({ ok: true, emailed: true });
}
