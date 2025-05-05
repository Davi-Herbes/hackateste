import { z } from "zod";
import { UserImageSchema } from "./user_image_schema";

export const UserDataSchema = z.object({
  username: z.string(),
  email: z.string(),
  role: z.enum(["student", "supervisor", "monitor"]),
  image: UserImageSchema,
  exp: z.number().nullable(),
  iat: z.number().nullable(),
});
