import { z } from "zod";

export const RegisterResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
});

export type RegisterResponse = z.infer<typeof RegisterResponseSchema>;
