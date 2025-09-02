"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateUserController;
const users_1 = require("../../schemas/users");
const CreateUserServer_1 = __importDefault(require("../../server/User/CreateUserServer"));
async function CreateUserController(request, reply) {
    try {
        const body = users_1.CreateUser.parse(request.body);
        const create = await (0, CreateUserServer_1.default)(body);
        return reply.status(201).send(create);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Erro ao logar"
        });
    }
}
