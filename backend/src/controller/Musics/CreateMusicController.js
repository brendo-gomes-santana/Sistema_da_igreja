"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateMusicController;
const CreateMusicServer_1 = __importDefault(require("../../server/Musics/CreateMusicServer"));
const musics_1 = require("../../schemas/musics");
async function CreateMusicController(request, reply) {
    try {
        const body = musics_1.CreateMusicSchema.parse(request.body);
        const create = await (0, CreateMusicServer_1.default)(body);
        return reply.status(200).send(create);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error creating a new music"
        });
    }
}
