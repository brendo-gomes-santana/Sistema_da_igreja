"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateLeviteEventServer;
const prisma_1 = require("../../prisma");
async function CreateLeviteEventServer(data) {
    const levite = await prisma_1.prisma.events_Levites.create({
        data: data,
        select: {
            id: true,
            Types: true,
            Levites: true,
        }
    });
    return {
        id: levite.id,
        name: levite.Levites.name,
        function: levite.Types.name
    };
}
