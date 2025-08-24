import { z } from 'zod'
import { hash } from 'bcryptjs';

import { prisma } from "../../prisma";
import { CreateUser } from "../../schemas/users";

type CreateUserType = z.infer<typeof CreateUser>

export default async function CreateUserServer(body: CreateUserType) {

    if (await prisma.users.findUnique({
        where: {
            email: body.email
        }
    })) {
        throw new Error('User exist in System!')
    }

    return await prisma.users.create({
        data: {
            email: body.email,
            name: body.name,
            password: await hash(body.password, 10)
        },
        select: {
            email: true,
            id: true,
            name: true
        }
    })
}