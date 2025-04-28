import { z } from "zod";
import { RegisterResponseSchema } from "./register_response.schema";

export const SuccessfulResponseSchema = RegisterResponseSchema.extend({
  status: z.number().default(200),
  message: z.string().default("Enviado."),
}).strict();

export type SuccessfulResponseProtocol = z.infer<typeof SuccessfulResponseSchema>;
