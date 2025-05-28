import z from 'zod';
export const LoginSchema = z.object({
    email: z.string().email('Email formatted incorrectly'),
    password: z.string().min(6,"Password must have at least 6 characters")
});
export type LoginFormData = z.infer<typeof LoginSchema>;