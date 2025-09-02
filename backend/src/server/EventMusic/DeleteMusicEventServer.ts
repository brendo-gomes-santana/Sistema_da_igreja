import z from 'zod';
import { DeleteMusicEventShema } from '../../schemas/EventMusic';
import { prisma } from '../../prisma';

type DeleteMusicEventType = z.infer<typeof DeleteMusicEventShema>

export default async function DeleteMusicEventServer({ id }: DeleteMusicEventType) {

    const musicEvent = await prisma.events_Musics.delete({
        where: {
            id
        }
    })

    return {
        id: musicEvent.id
    }

}