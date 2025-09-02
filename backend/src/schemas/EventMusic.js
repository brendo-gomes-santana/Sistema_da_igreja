"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMusicEventShema = exports.createMusicEventSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createMusicEventSchema = zod_1.default.object({
    order: zod_1.default.number(),
    id_event: zod_1.default.uuid(),
    id_music: zod_1.default.uuid(),
    id_category: zod_1.default.uuid().optional()
});
exports.DeleteMusicEventShema = zod_1.default.object({
    id: zod_1.default.uuid()
});
