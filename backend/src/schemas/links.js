"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLinkShema = exports.CreateLinkShema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.CreateLinkShema = zod_1.default.object({
    links: zod_1.default.array(zod_1.default.object({
        id_type: zod_1.default.uuid({
            error: "id_type must be valid UUID"
        }),
        id_music: zod_1.default.uuid({
            error: "id_music must be valid UUID"
        }),
        link: zod_1.default.url({
            error: "link aren't url"
        })
    }))
});
exports.DeleteLinkShema = zod_1.default.object({
    id: zod_1.default.uuid({
        error: "id of link must be valid UUID"
    })
});
