import { z } from 'zod';
import { prisma } from "../../prisma";
import { LoginUserSchema } from "../../schemas/users";
import { compare } from 'bcryptjs';

type LoginUser = z.infer<typeof LoginUserSchema>;

export default async function LogiUserServer(body: LoginUser) {

    const user = await prisma.users.findUnique({
        where: {
            email: body.email
        }
    });

    if (!user) {
        throw new Error('User does not exist!');
    }

    const passwordV = await compare(body.password, user.password);
    if (!passwordV) {
        throw new Error('Password Incorrect!');
    }

    return user;

}
