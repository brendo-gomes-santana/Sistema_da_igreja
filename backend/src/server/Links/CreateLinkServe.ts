import z from 'zod';

import { prisma } from "../../prisma";
import { CreateLinkShema } from '../../schemas/links';

type CreateLinkType = z.infer<typeof CreateLinkShema>

export default async function CreateLinkServe({ links }: CreateLinkType){

    await prisma.links.createMany({
        data: links
    })

    const list = await prisma.links.findMany({
        where: {
            link: {
                in: links.map(link => link.link)
            }
        },
        select: {
            id: true,
            link: true,
            Types: {
                select:{
                    name: true
                }
            }
        }
    })

    return list

}