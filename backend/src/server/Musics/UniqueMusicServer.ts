import z from 'zod'

import { prisma } from '../../prisma'
import { UniqueMusicSchema } from '../../schemas/musics'

type UniqueMusicType = z.infer<typeof UniqueMusicSchema>

export default async function UniqueMusicServer(body: UniqueMusicType) {
    const music = await prisma.musics.findUnique({
        where: {
            id: body.id
        },
        select: {
            id: true,
            title: true,
            letter: true,
            url_image: true,
            link_CifraClub: true,
            id_youtube: true,
            Categories: true,
            Links: {
                select: {
                    id: true, 
                    link: true,
                    Types: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },
    })
    if (!music) {
        throw new Error('Music does not exist')
    }

    return music
}