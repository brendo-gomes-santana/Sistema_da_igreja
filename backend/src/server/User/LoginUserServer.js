"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LogiUserServer;
const prisma_1 = require("../../prisma");
const bcryptjs_1 = require("bcryptjs");
async function LogiUserServer(body) {
    const user = await prisma_1.prisma.users.findUnique({
        where: {
            email: body.email
        }
    });
    if (!user) {
        throw new Error('User does not exist!');
    }
    const passwordV = await (0, bcryptjs_1.compare)(body.password, user.password);
    if (!passwordV) {
        throw new Error('Password Incorrect!');
    }
    return user;
}
