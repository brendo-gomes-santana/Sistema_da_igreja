"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListTypesController;
const listTypesServer_1 = __importDefault(require("../../server/Types/listTypesServer"));
async function ListTypesController(request, reply) {
    try {
        const list = await (0, listTypesServer_1.default)();
        return reply.status(200).send(list);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching the types levites"
        });
    }
}
