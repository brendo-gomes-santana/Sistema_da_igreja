"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendWhatsappShema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.sendWhatsappShema = zod_1.default.object({
    id_event: zod_1.default.uuid()
});
