import z from 'zod'

import { ListMusicShema } from '../../schemas/musics';
import { prisma } from "../../prisma";

type ListMusictype = z.infer<typeof ListMusicShema>

export default async function ListMusicServer(body:ListMusictype){

    return await prisma.musics.findMany({
        where: {
            id_category: body.id_category,
            title: {
                startsWith: body.title
            }
        },
        select: {
            id: true,
            title: true,
            link_CifraClub: true,
            id_youtube: true,
            url_image: true
        }
    })

}