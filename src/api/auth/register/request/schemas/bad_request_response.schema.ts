import { z } from "zod";
import { RegisterResponseSchema } from "./register_response.schema";

export const BadRequestResponseSchema = RegisterResponseSchema.extend({
  status: z.number().min(400).max(499).default(400),
  message: z.string().default("Algum dado enviado não é valido."),
  field: z.enum(["password", "email", "username"]),
}).strict();

export type BadRequestResponseProtocol = z.infer<typeof BadRequestResponseSchema>;
