"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateMusicServer;
const prisma_1 = require("../../prisma");
async function CreateMusicServer(body) {
    return await prisma_1.prisma.musics.create({
        data: body
    });
}
