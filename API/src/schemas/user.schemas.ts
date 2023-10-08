import { z } from 'zod'

const userCore = {
  name: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z
    .string()
    .email('Porfavor, infomr um e-mail válido')
    .min(1, 'O e-mail é obrigatório')
}

export const userSchema = z
  .object({
    ...userCore,
    password: z.string().min(4, 'A senha deve ter pelo menos 4 caracteres'),
    passwordConfirmation: z.string({ required_error: 'Campo obrigatório' })
  })
  .refine(data => data.password === data.passwordConfirmation, {
    message: "AS senhas informadas não correspondem",
    path: ['passwordConfirmation']
  })

export type CreateUserSchema = z.infer<typeof userSchema>

export const loginSchema = z.object({
  email: z.string().email('Porfavor, infomr um e-mail válido').min(1, 'O e-mail é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória')
})

export type LoginSchema = z.infer<typeof loginSchema>

export const userPathParams = z.object({
  id: z.string()
})

export type UserPathParams = z.infer<typeof userPathParams>
