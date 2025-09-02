"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteMusicController;
const UniqueMusicServer_1 = __importDefault(require("../../server/Musics/UniqueMusicServer"));
const DeleteMusicServer_1 = __importDefault(require("../../server/Musics/DeleteMusicServer"));
const musics_1 = require("../../schemas/musics");
async function DeleteMusicController(request, reply) {
    try {
        const params = musics_1.UniqueMusicSchema.parse(request.params);
        await (0, UniqueMusicServer_1.default)(params);
        const DeleteMusic = await (0, DeleteMusicServer_1.default)(params);
        return reply.status(200).send(DeleteMusic);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error delete the musics"
        });
    }
}
