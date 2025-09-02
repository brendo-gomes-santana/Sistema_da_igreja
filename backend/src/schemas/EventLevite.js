"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateleviteEventShema = exports.IdLeviteEventShema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.IdLeviteEventShema = zod_1.default.object({
    id: zod_1.default.uuid({ error: 'id must be valid UUID' })
});
exports.CreateleviteEventShema = zod_1.default.object({
    id_levite: zod_1.default.uuid(),
    id_type: zod_1.default.uuid(),
    id_event: zod_1.default.uuid(),
});
