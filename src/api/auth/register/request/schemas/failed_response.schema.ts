import { z } from "zod";
import { RegisterResponseSchema } from "./register_response.schema";

export const FailedResponseSchema = RegisterResponseSchema.extend({
  status: z.number().default(500),
  message: z.string().default("Erro interno. (MENSAGEM PADRÃO)"),
}).strict();

export type FailedResponseProtocol = z.infer<typeof FailedResponseSchema>;
