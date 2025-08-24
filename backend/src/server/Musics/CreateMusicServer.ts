import z from 'zod'

import { prisma } from "../../prisma";
import { CreateMusicSchema } from '../../schemas/musics';

type CreateMusicType = z.infer<typeof CreateMusicSchema>

export default async function CreateMusicServer(body: CreateMusicType) {

    return await prisma.musics.create({
        data: body
    })

}