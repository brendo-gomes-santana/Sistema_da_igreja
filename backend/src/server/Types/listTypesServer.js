"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListTypesServer;
const prisma_1 = require("../../prisma");
async function ListTypesServer() {
    return await prisma_1.prisma.types.findMany();
}
