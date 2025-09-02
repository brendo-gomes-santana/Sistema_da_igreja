"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListEventsServer;
const prisma_1 = require("../../prisma");
async function ListEventsServer() {
    await prisma_1.prisma.events.deleteMany({
        where: {
            date: {
                lt: new Date()
            }
        }
    });
    return await prisma_1.prisma.events.findMany({
        orderBy: {
            date: "asc"
        },
        select: {
            id: true,
            name: true,
            date: true
        }
    });
}
