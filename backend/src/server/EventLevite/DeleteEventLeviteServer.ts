import z from 'zod';

import { prisma } from "../../prisma";
import { IdLeviteEventShema } from '../../schemas/EventLevite';
type Props = z.infer<typeof IdLeviteEventShema>

export default async function DeleteEventLeviteServer({ id }: Props){

    await prisma.events_Musics.delete({
        where: { id }
    })

    return { message: 'Levite removed of event with sucess' }
}