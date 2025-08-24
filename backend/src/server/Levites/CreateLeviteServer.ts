import z from 'zod'

import { prisma } from "../../prisma";
import { CreateLeviteSchema } from '../../schemas/leivtes';

type CreateLeviteProps = z.infer<typeof CreateLeviteSchema>

export default async function CreateLeviteServer(props: CreateLeviteProps) {
    return await prisma.levites.create({
        data: {
            name: props.name,
            Types_Levites: {
                createMany: {
                    data: props.types.map((item) => ({ id_type: item }))
                }
            }
        }
    })

}