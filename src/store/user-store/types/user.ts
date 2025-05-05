import { z } from "zod";
import { UserDataSchema } from "./user_data.schema";

export type User = z.infer<typeof UserDataSchema>;
