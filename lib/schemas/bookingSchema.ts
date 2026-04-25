import { z } from "zod";

export const BookingSchema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Неверный формат email").min(5),
  phone: z
    .string()
    .min(10, "Номер слишком короткий")
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Неверный формат номера",
    ),
  comment: z.string().optional(),
  date: z.string(),
  time: z.string(),
  guests: z.string(),
  price: z.string(),
});

export type BookingFormValues = z.infer<typeof BookingSchema>;
