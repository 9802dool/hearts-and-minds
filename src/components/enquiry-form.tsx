"use client";

import { useState } from "react";
import { site } from "@content/site";
import { supportFocus, supportIntents } from "@content/story";
import { buttonClass, fieldClass } from "@/components/brand";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: readonly string[];
  autoComplete?: string;
};

const fields: Field[] = [
  { name: "name", label: "Name", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "organisation", label: "Organisation", autoComplete: "organization" },
  { name: "intent", label: "I would like to", required: true, options: supportIntents },
  { name: "focus", label: "Area of the programme", required: true, options: supportFocus },
  { name: "message", label: "Message", type: "textarea", required: true },
];

export function EnquiryForm() {
  const [pending, setPending] = useState(false);
  const [notice, setNotice] = useState("");
  const [errors, setErrors] = useState<Record<string, string[] | undefined>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    setPending(true);
    setNotice("");
    setErrors({});
    const data = new FormData(formEl);
    const payload: Record<string, string> = { form: "support" };
    data.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      const response = await fetch("/api/forms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; emailed?: boolean; errors?: Record<string, string[]> };
      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setNotice("Check the form and try again.");
        return;
      }
      formEl.reset();
      setNotice(
        result.emailed === false
          ? `Thank you. Email from this form is not switched on yet. Please call ${site.phoneDisplay} or write to ${site.email}.`
          : "Thank you. Your message has been sent to the Hearts and Minds Programme.",
      );
    } catch {
      setNotice(`The message could not be sent. Please call ${site.phoneDisplay} or write to ${site.email}.`);
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-5 rounded-md border border-hm-line bg-white p-5 sm:p-7" noValidate>
      <div>
        <h2 className="font-display text-3xl font-medium text-hm-navy">Write to the programme</h2>
        <p className="mt-2 text-sm leading-relaxed text-hm-muted">
          Tell us whether you want to sponsor, contribute or partner. {site.emergency}
        </p>
      </div>
      {fields.map((field) => {
        const id = `support-${field.name}`;
        const errorId = `${id}-error`;
        const error = errors[field.name]?.[0];
        return (
          <div key={field.name}>
            <label htmlFor={id} className="block text-sm font-semibold">
              {field.label}
              {field.required ? (
                <>
                  <span aria-hidden="true"> *</span>
                  <span className="sr-only"> required</span>
                </>
              ) : null}
            </label>
            {field.options ? (
              <select
                id={id}
                name={field.name}
                required={field.required}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`${fieldClass} mt-1`}
                defaultValue=""
              >
                <option value="">Choose one</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                required={field.required}
                rows={6}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`${fieldClass} mt-1`}
              />
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                autoComplete={field.autoComplete}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? errorId : undefined}
                className={`${fieldClass} mt-1`}
              />
            )}
            {error ? (
              <p id={errorId} className="mt-1 text-sm font-medium text-hm-red">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="support-company">Company website</label>
        <input id="support-company" name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" className={`${buttonClass} w-full sm:w-auto`} disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
      <p role="status" className="text-sm leading-relaxed text-hm-muted">
        {notice}
      </p>
    </form>
  );
}
