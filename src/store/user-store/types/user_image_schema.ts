import { z } from "zod";

export const UserImageSchema = z.object({
  createdAt: z.string(),
  format: z.string(),
  id: z.string(),
  originalFilename: z.string(),
  ownerId: z.string(),
  publicId: z.string(),
  updatedAt: z.string(),
  url: z.string(),
});
