"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateMusicEventController;
const CreateMusicEventServer_1 = __importDefault(require("../../server/EventMusic/CreateMusicEventServer"));
const EventMusic_1 = require("../../schemas/EventMusic");
async function CreateMusicEventController(req, reply) {
    try {
        const body = EventMusic_1.createMusicEventSchema.parse(req.body);
        const create = await (0, CreateMusicEventServer_1.default)(body);
        return reply.status(200).send(create);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create new music of event"
        });
    }
}
