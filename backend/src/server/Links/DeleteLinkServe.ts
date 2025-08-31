import z from 'zod'

import { DeleteLinkShema } from "../../schemas/links";
import { prisma } from '../../prisma';

type DeleteLinkType = z.infer<typeof DeleteLinkShema>

export default async function DeleteLinkServer({ id }:DeleteLinkType){

    const link = await prisma.links.delete({
        where: {
            id
        }
    })

    return link
}