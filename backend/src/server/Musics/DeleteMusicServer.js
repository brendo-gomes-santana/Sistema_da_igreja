"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteMusicServer;
const prisma_1 = require("../../prisma");
async function DeleteMusicServer(body) {
    return await prisma_1.prisma.musics.delete({
        where: {
            id: body.id
        }
    });
}
