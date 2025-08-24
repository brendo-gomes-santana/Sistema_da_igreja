import z from 'zod';

import { CreateEventSchema } from '../../schemas/Events';
import { prisma } from "../../prisma";

type Props = z.infer<typeof CreateEventSchema>

export default async function CreateEventServer(props: Props, id: string) {

    return await prisma.events.create({
        data: {
            name: props.name,
            date: new Date(props.date),
            observation: props.observation,
            id_user: id,
            Events_Levites: {
                createMany: {
                    data: props.levitas?.map(item => ({
                        id_levite: item.id_levite,
                        id_type: item.id_type
                    })) || []
                }
            }
        }
    })

}