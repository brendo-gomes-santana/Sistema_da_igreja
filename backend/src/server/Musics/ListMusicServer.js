"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListMusicServer;
const prisma_1 = require("../../prisma");
async function ListMusicServer(body) {
    return await prisma_1.prisma.musics.findMany({
        where: {
            id_category: body.id_category,
            title: {
                startsWith: body.title
            }
        },
        select: {
            id: true,
            title: true,
            link_CifraClub: true,
            id_youtube: true,
            url_image: true,
            Categories: true
        }
    });
}
