"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueMusicSchema = exports.ListMusicShema = exports.CreateMusicSchema = void 0;
const zod_1 = require("zod");
exports.CreateMusicSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'title is required')
        .transform((val) => val.toUpperCase()),
    url_image: zod_1.z.url()
        .regex(/^https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|tiff)(\?.*)?$/i, 'must be a valid image URL').min(1, 'url_image is a required field'),
    link_CifraClub: zod_1.z.url({
        error: 'URL is valid'
    }).min(1, 'link_CifraClub is a required field'),
    id_youtube: zod_1.z.string().min(1, 'id_youtube is a required field'),
    letter: zod_1.z.string().min(1, 'letter is a required field'),
    id_category: zod_1.z.uuid({
        error: 'id_category must be a viled UUID'
    }).min(1, 'id_category is a required field')
});
exports.ListMusicShema = zod_1.z.object({
    title: zod_1.z.string().optional()
        .transform((val) => val?.toUpperCase()),
    id_category: zod_1.z.uuid({
        error: 'id_category must be a valid UUID'
    }).optional()
});
exports.UniqueMusicSchema = zod_1.z.object({
    id: zod_1.z.uuid({
        error: 'id must be a valid UUID'
    })
});
