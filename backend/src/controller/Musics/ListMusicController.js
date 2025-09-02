"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListMusicController;
const musics_1 = require("../../schemas/musics");
const ListMusicServer_1 = __importDefault(require("../../server/Musics/ListMusicServer"));
async function ListMusicController(request, reply) {
    try {
        const body = musics_1.ListMusicShema.parse(request.query);
        const list = await (0, ListMusicServer_1.default)(body);
        return reply.status(200).send(list);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error list the musics"
        });
    }
}
