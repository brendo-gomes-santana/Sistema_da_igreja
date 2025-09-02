"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = exports.LoginUserSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.LoginUserSchema = zod_1.default.object({
    email: zod_1.default.email({ error: 'Email inválido' }).min(1, 'Campo Obrigatório'),
    password: zod_1.default.string().min(1, 'Campo Obrigatório')
});
exports.CreateUser = exports.LoginUserSchema.extend({
    name: zod_1.default.string().min(1, 'Campo Obrigatório'),
});
