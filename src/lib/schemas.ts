import { z } from "zod";

const person = {
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(24),
  email: z.string().trim().email().max(120),
  companyWebsite: z.string().optional(),
};

export const formSchema = z.discriminatedUnion("form", [
  z.object({
    form: z.literal("contact"),
    ...person,
    subject: z.enum(["Volunteer", "Mentoring", "Partnership", "Request a programme", "General", "Other"]),
    message: z.string().trim().min(10).max(2000),
  }),
  z.object({
    form: z.literal("volunteer"),
    ...person,
    interest: z.string().trim().min(2).max(120),
    message: z.string().trim().max(2000).optional(),
  }),
  z.object({
    form: z.literal("mentor"),
    ...person,
    expertise: z.string().trim().min(2).max(160),
    availability: z.string().trim().min(2).max(160),
  }),
  z.object({
    form: z.literal("partner"),
    ...person,
    organisation: z.string().trim().min(2).max(120),
    message: z.string().trim().min(10).max(2000),
  }),
  z.object({
    form: z.literal("request"),
    ...person,
    organisation: z.string().trim().min(2).max(160),
    programme: z.string().trim().min(2).max(160),
    message: z.string().trim().min(10).max(2000),
  }),
  z.object({
    form: z.literal("register"),
    ...person,
    eventName: z.string().trim().min(2).max(160),
    eventDate: z.string().trim().min(4).max(40),
  }),
]);

export type FormInput = z.infer<typeof formSchema>;
