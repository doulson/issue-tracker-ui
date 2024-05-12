import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password is invalid"
    ),
});

export const registerSchema = z
  .object({
    firstName: z
      .string({ message: "First Name is required" })
      .min(1)
      .max(255, { message: "First Name is over length" }),
    lastName: z
      .string({ message: "Last Name is required" })
      .min(1)
      .max(255, { message: "Last Name is over length" }),
    email: z
      .string({ message: "Email is required" })
      .email({ message: "Email is invalid" }),
    password: z
      .string({ message: "Password is required" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password is invalid"
      ),
    confirmPassword: z.string({ message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const resetPwSchema = z.object({
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
});
