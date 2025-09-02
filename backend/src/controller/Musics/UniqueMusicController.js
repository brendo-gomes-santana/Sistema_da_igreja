"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UniqueMusicController;
const musics_1 = require("../../schemas/musics");
const UniqueMusicServer_1 = __importDefault(require("../../server/Musics/UniqueMusicServer"));
async function UniqueMusicController(request, reply) {
    try {
        const params = musics_1.UniqueMusicSchema.parse(request.params);
        const music = await (0, UniqueMusicServer_1.default)(params);
        return reply.status(200).send(music);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching the music"
        });
    }
}
