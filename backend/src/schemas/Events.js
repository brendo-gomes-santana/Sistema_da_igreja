"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueIdEventSchema = exports.CreateEventSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.CreateEventSchema = zod_1.default.object({
    name: zod_1.default.string().min(1, "name is a required field"),
    date: zod_1.default.string()
        .refine((val) => {
        const d = new Date(val);
        if (isNaN(d.getTime()))
            return false; // inválido
        const today = new Date();
        today.setHours(0, 0, 0, 0); // só data
        return d >= today; // só hoje ou futuro
    }, "date must be today or in the future"),
    observation: zod_1.default.string().optional(),
    levitas: zod_1.default.array(zod_1.default.object({
        id_type: zod_1.default.uuid({
            error: "id_type must be a valid UUID"
        }).min(1, "id_type is required field"),
        id_levite: zod_1.default.uuid({
            error: "id_levite must be a valid UUID"
        }).min(1, "id_levite is required field"),
    })),
    musics: zod_1.default.array(zod_1.default.object({
        order: zod_1.default.number(),
        id_category: zod_1.default.uuid({
            error: "id_category must is valid UUID"
        }).optional(),
        id_music: zod_1.default.uuid({
            error: "id_music must is valid UUID"
        }),
    })).optional()
});
exports.UniqueIdEventSchema = zod_1.default.object({
    id: zod_1.default.uuid({
        error: "id of event must be a valid UUID"
    })
});
