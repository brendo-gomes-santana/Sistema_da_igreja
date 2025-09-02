"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListLeviteServer;
const prisma_1 = require("../../prisma");
async function ListLeviteServer() {
    const levites = await prisma_1.prisma.levites.findMany({
        select: {
            id: true,
            name: true,
            Types_Levites: {
                select: {
                    Types: true
                }
            }
        }
    });
    return levites.map((item) => ({
        id: item.id,
        name: item.name,
        types: item.Types_Levites.map((item) => ({
            id: item.Types.id,
            name: item.Types.name
        }))
    }));
}
