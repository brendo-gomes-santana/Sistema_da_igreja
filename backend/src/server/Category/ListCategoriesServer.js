"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListCategoriesServer;
const prisma_1 = require("../../prisma");
async function ListCategoriesServer() {
    return await prisma_1.prisma.categories.findMany();
}
