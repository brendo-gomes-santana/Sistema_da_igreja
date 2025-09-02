"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UniqueMusicServer;
const prisma_1 = require("../../prisma");
async function UniqueMusicServer(body) {
    const music = await prisma_1.prisma.musics.findUnique({
        where: {
            id: body.id
        },
        select: {
            id: true,
            title: true,
            letter: true,
            url_image: true,
            link_CifraClub: true,
            id_youtube: true,
            Categories: true,
            Links: {
                select: {
                    id: true,
                    link: true,
                    Types: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        },
    });
    if (!music) {
        throw new Error('Music does not exist');
    }
    return music;
}
