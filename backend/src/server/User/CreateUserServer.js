"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateUserServer;
const bcryptjs_1 = require("bcryptjs");
const prisma_1 = require("../../prisma");
async function CreateUserServer(body) {
    if (await prisma_1.prisma.users.findUnique({
        where: {
            email: body.email
        }
    })) {
        throw new Error('User exist in System!');
    }
    return await prisma_1.prisma.users.create({
        data: {
            email: body.email,
            name: body.name,
            password: await (0, bcryptjs_1.hash)(body.password, 10)
        },
        select: {
            email: true,
            id: true,
            name: true
        }
    });
}
