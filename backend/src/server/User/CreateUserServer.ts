import { z } from 'zod'
import { hash } from 'bcryptjs';

import { prisma } from "../../prisma";
import { CreateUser } from "../../schemas/users";

type CreateUserType = z.infer<typeof CreateUser>

export default async function CreateUserServer(body:CreateUserType){

    const create = await prisma.users.create({
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

    return create

}