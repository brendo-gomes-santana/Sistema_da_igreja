import z from 'zod';
import { prisma } from "../../prisma";
import { CreateleviteEventShema } from '../../schemas/EventLevite';

type Props = z.infer<typeof CreateleviteEventShema>

export default async function CreateLeviteEventServer(data: Props){

    const levite = await prisma.events_Levites.create({
        data: data,
        select: {
            id: true,
            Types: true,
            Levites: true,
        }
    })

    return {
        id: levite.id,
        name: levite.Levites.name,
        function: levite.Types.name
    }
}
