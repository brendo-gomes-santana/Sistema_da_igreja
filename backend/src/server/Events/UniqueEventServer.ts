import z from 'zod' 

import { prisma } from "../../prisma";
import { UniqueIdEventSchema } from '../../schemas/Events';

type UniqueIdEventType = z.infer<typeof UniqueIdEventSchema>

export default async function UniqueEventServer({ id }:UniqueIdEventType){

    const event = await prisma.events.findUnique({
        where: { id },
        include: {
            Events_Musics: {
                select: {
                    id: true,
                    order:true,
                    Categories:true,
                    Musics: {
                        include: {
                            Categories: true
                        }
                    }
                },
                orderBy: {
                    order: "asc"
                }
            },
            Events_Levites: {
                select: {
                    id: true,
                    Types: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    Levites:true
                }
            }
        }
    })

    if(!event){
        throw new Error("Event does not exist more")
    }

    return {
        id: event.id,
        name: event.name,
        date: event.date,
        observation: event.observation,

        levites: event.Events_Levites.map((levite) => ({
            id: levite.id,
            name: levite.Levites.name,
            function: levite.Types.name
        })),
        musics: event.Events_Musics.map((music) => ({
            id: music.id,
            id_music: music.Musics.id,
            order: music.order,
            name: music.Musics.title,
            
            link_cifra: music.Musics.link_CifraClub,
            id_youtube: music.Musics.id_youtube,
            
            category: music.Categories || music.Musics.Categories

        }))
    }
}