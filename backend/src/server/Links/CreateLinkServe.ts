import z from 'zod';

import { prisma } from "../../prisma";
import { CreateLinkShema } from '../../schemas/links';

type CreateLinkType = z.infer<typeof CreateLinkShema>

export default async function CreateLinkServe({ links }: CreateLinkType){

    const create = await prisma.links.createMany({
        data: links
    })

    return create

}