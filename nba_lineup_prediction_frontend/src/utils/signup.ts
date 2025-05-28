import z from 'zod';
export const SignUpSchema = z.object({
    username: z.string().min(2,'Username must have at least 2 characters'),
    email: z.string().email('Email formatted incorrectly'),
    password: z.string().min(6,"Password must have at least 6 characters"),
    confirmPassword: z.string()
});
export type SignupFormData = z.infer<typeof SignUpSchema>;