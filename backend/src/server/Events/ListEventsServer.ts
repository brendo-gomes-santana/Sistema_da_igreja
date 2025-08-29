import { prisma } from "../../prisma";

export default async function ListEventsServer() {

    await prisma.events.deleteMany({
        where: {
            date: {
                lt: new Date()
            }
        }
    })

    return await prisma.events.findMany({
        orderBy: {
            date: "asc"
        },
        select: {
            id: true,
            name: true,
            date: true
        }
    })

}