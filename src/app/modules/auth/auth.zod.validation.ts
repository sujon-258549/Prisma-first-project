import { z } from "zod";

export const loginZodSchema = z.object({
    body: z.object({
        email: z.string().min(1),
        password: z.string().min(1),
    })
});




