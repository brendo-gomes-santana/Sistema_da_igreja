"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateMusicEventServer;
const prisma_1 = require("../../prisma");
async function CreateMusicEventServer(props) {
    const create = await prisma_1.prisma.events_Musics.create({
        data: props,
        select: {
            id: true,
            id_music: true,
            order: true,
            Musics: {
                include: {
                    Categories: true
                }
            },
            Categories: true
        }
    });
    return {
        id: create.id,
        id_music: create.id_music,
        order: create.order,
        name: create.Musics.title,
        link_cifra: create.Musics.link_CifraClub,
        id_youtube: create.Musics.id_youtube,
        category: create.Categories || create.Musics.Categories
    };
}
