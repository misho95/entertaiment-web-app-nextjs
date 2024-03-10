import { z } from "zod";

const LoginFormSchema = z.object({
  id: z.string(),
  email: z.string({
    invalid_type_error: `Can't be empty`,
  }),
  password: z.string({
    invalid_type_error: `Can't be empty`,
  }),

  date: z.string(),
});

const LoginFormValidator = LoginFormSchema.omit({ id: true });

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function loginUser(prevState: State, formData: FormData) {
  const validatedFields = LoginFormValidator.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
}
