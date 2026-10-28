import { supportFocus, supportIntents } from "@content/story";
import { z } from "zod";

export const formSchema = z.object({
  form: z.literal("support"),
  name: z.string().trim().min(2, "Enter your name.").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  phone: z.string().trim().max(24).optional(),
  organisation: z.string().trim().max(120).optional(),
  intent: z.enum(supportIntents, { error: "Choose how you would like to help." }),
  focus: z.enum(supportFocus, { error: "Choose an area of the programme." }),
  message: z.string().trim().min(10, "Write a short message so we know how to respond.").max(2000),
  companyWebsite: z.string().optional(),
});

export type FormInput = z.infer<typeof formSchema>;
