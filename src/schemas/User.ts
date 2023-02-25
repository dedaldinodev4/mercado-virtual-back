import { z, AnyZodObject } from 'zod'

export const User: AnyZodObject = z.object({
  username: z.string({
    required_error: 'Username is required.',
    invalid_type_error: 'Username must be a string'
  })
  .trim()
  .min(1, 'Username cannot be empty'),

  email: z.string({
    required_error: 'Email is required.',
    invalid_type_error: 'Email must be a string'
  })
  .trim()
  .min(1, 'Email cannot be empty')
  .email({ message: 'Must be a Email Valid.'}),

  password: z.string({
    required_error: 'Password is required.',
    invalid_type_error: 'Password must be a string'
  })
  .trim()
  .min(1, 'Password cannot be empty'),

  role: z.string({
    required_error: 'Role is required.',
    invalid_type_error: 'Role must be a string'
  })
  .trim()
  .min(1, 'Role cannot be empty'),
  status: z.boolean({}),
  created_at: z.date({})
}) 