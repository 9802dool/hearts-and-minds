"use client";

import { useState } from "react";
import { site } from "@content/site";
import { fieldClass, buttonClass } from "@/components/brand";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
};

export function EnquiryForm({
  form,
  title,
  fields,
  hidden,
  submitLabel = "Send",
  titleId,
}: {
  form: string;
  title: string;
  fields: Field[];
  hidden?: Record<string, string>;
  submitLabel?: string;
  titleId?: string;
}) {
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
    const payload: Record<string, string> = { form };
    data.forEach((value, key) => {
      payload[key] = String(value);
    });
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = (await response.json()) as { ok?: boolean; emailed?: boolean; errors?: Record<string, string[]> };
    setPending(false);
    if (!response.ok || !result.ok) {
      setErrors(result.errors ?? {});
      setNotice("Check the form and try again.");
      return;
    }
    formEl.reset();
    setNotice(
      result.emailed === false
        ? `We saved your note on this screen only. Email is not switched on yet, so please call ${site.phoneDisplay} or write to ${site.email}.`
        : "Thank you. Someone from Hearts & Minds will be in touch.",
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl bg-white p-5 shadow-sm md:p-7" noValidate>
      <h3 id={titleId} className="font-display text-2xl font-bold text-hm-blue">{title}</h3>
      {hidden
        ? Object.entries(hidden).map(([key, value]) => <input key={key} type="hidden" name={key} value={value} />)
        : null}
      {fields.map((field) => (
        <label key={field.name} className="block text-sm font-semibold">
          {field.label}
          {field.options ? (
            <select name={field.name} required={field.required} className={`${fieldClass} mt-1`}>
              <option value="">Choose one</option>
              {field.options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea name={field.name} required={field.required} rows={5} className={`${fieldClass} mt-1`} />
          ) : (
            <input
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              className={`${fieldClass} mt-1`}
            />
          )}
          {errors[field.name] ? <span className="mt-1 block font-medium text-hm-red">{errors[field.name]?.[0]}</span> : null}
        </label>
      ))}
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>
      <button className={`${buttonClass} w-full sm:w-auto`} disabled={pending}>
        {pending ? "Sending…" : submitLabel}
      </button>
      {notice ? <p className="text-sm leading-relaxed text-hm-muted">{notice}</p> : null}
    </form>
  );
}
