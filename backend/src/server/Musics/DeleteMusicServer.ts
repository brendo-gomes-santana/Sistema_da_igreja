import z from 'zod';

import { UniqueMusicSchema } from '../../schemas/musics';
import { prisma } from '../../prisma';

type UniqueMusicType = z.infer<typeof UniqueMusicSchema>

export default async function DeleteMusicServer(body:UniqueMusicType){

    return await prisma.musics.delete({
        where: {
            id: body.id
        }
    })

}