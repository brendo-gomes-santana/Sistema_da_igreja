"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginUserController;
const users_1 = require("../../schemas/users");
const LoginUserServer_1 = __importDefault(require("../../server/User/LoginUserServer"));
async function LoginUserController(request, reply) {
    try {
        const body = users_1.LoginUserSchema.parse(request.body);
        const user = await (0, LoginUserServer_1.default)(body);
        const token = await reply.jwtSign({ id: user.id });
        return reply.status(200).send({ token });
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Erro ao logar"
        });
    }
}
