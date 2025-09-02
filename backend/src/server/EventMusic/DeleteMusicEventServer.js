"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteMusicEventServer;
const prisma_1 = require("../../prisma");
async function DeleteMusicEventServer({ id }) {
    const musicEvent = await prisma_1.prisma.events_Musics.delete({
        where: {
            id
        }
    });
    return {
        id: musicEvent.id
    };
}
