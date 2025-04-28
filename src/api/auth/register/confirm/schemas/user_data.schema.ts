import { z } from "zod";

export const UserDataSchema = z.object({
  username: z.string(),
  email: z.string(),
  role: z.enum(["student", "supervisor", "monitor"]),
});
