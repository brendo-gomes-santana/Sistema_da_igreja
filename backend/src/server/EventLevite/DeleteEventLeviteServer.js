"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteEventLeviteServer;
const prisma_1 = require("../../prisma");
async function DeleteEventLeviteServer({ id }) {
    await prisma_1.prisma.events_Musics.delete({
        where: { id }
    });
    return { message: 'Levite removed of event with sucess' };
}
