"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteLinkServer;
const prisma_1 = require("../../prisma");
async function DeleteLinkServer({ id }) {
    const link = await prisma_1.prisma.links.delete({
        where: {
            id
        }
    });
    return link;
}
