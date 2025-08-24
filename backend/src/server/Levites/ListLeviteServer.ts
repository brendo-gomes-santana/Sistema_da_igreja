import { prisma } from "../../prisma";

export default async function ListLeviteServer() {
    const levites = await prisma.levites.findMany({
        select: {
            id: true,
            name: true,
            Types_Levites: {
                select: {
                    Types: true
                }
            }
        }
    })

    return levites.map((item) => ({
        id: item.id,
        name: item.name,
        types: item.Types_Levites.map((item) => ({
            id: item.Types.id,
            name: item.Types.name
        }))
    }))
}