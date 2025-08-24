import z from 'zod';
import LoginUserController from '../controller/User/LoginUserController';

export const LoginUserSchema = z.object({
    email: z.email({ error: 'Email inválido' }).min(1, 'Campo Obrigatório'),
    password: z.string().min(1, 'Campo Obrigatório')
})

export const CreateUser = LoginUserSchema.extend({
    name: z.string().min(1, 'Campo Obrigatório'),
    
})

