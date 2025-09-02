"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateEventServer;
const prisma_1 = require("../../prisma");
async function CreateEventServer(props, id) {
    return await prisma_1.prisma.events.create({
        data: {
            name: props.name,
            date: new Date(props.date),
            observation: props.observation,
            id_user: id,
            Events_Levites: {
                createMany: {
                    data: props.levitas.map(item => ({
                        id_levite: item.id_levite,
                        id_type: item.id_type
                    }))
                }
            },
            Events_Musics: {
                createMany: {
                    data: props.musics?.map(itens => ({
                        id_category: itens.id_category || undefined,
                        order: itens.order || 0,
                        id_music: itens.id_music
                    })) || []
                }
            }
        }
    });
}
