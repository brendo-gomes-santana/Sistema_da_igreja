"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateLeviteServer;
const prisma_1 = require("../../prisma");
async function CreateLeviteServer(props) {
    return await prisma_1.prisma.levites.create({
        data: {
            name: props.name,
            Types_Levites: {
                createMany: {
                    data: props.types.map((item) => ({ id_type: item }))
                }
            }
        }
    });
}
