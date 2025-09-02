"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateLinkServe;
const prisma_1 = require("../../prisma");
async function CreateLinkServe({ links }) {
    await prisma_1.prisma.links.createMany({
        data: links
    });
    const list = await prisma_1.prisma.links.findMany({
        where: {
            link: {
                in: links.map(link => link.link)
            }
        },
        select: {
            id: true,
            link: true,
            Types: {
                select: {
                    name: true
                }
            }
        }
    });
    return list;
}
