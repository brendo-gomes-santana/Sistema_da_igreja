import z from "zod";

import { prisma } from "../../prisma";
import { createMusicEventSchema } from "../../schemas/EventMusic";

type CreateMusicEventType = z.infer<typeof createMusicEventSchema>

export default async function CreateMusicEventServer(props: CreateMusicEventType){

    const create = await prisma.events_Musics.create({
        data: props,
        select: {
            id: true,
            id_music: true,
            order: true,
            Musics: {
                include:{
                    Categories: true
                }
            },
            Categories: true
        }
    })

    return {
        id: create.id,
        id_music: create.id_music,
        order: create.order,
        name: create.Musics.title,
        link_cifra: create.Musics.link_CifraClub,
        id_youtube: create.Musics.id_youtube,
        category: create.Categories || create.Musics.Categories
    }

}