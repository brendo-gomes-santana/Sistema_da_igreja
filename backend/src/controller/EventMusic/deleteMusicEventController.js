"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteMusicEventController;
const EventMusic_1 = require("../../schemas/EventMusic");
const DeleteMusicEventServer_1 = __importDefault(require("../../server/EventMusic/DeleteMusicEventServer"));
async function DeleteMusicEventController(req, reply) {
    try {
        const { id } = EventMusic_1.DeleteMusicEventShema.parse(req.params);
        const MusicEvent = await (0, DeleteMusicEventServer_1.default)({ id });
        return reply.status(200).send(MusicEvent);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error delete music of event"
        });
    }
}
