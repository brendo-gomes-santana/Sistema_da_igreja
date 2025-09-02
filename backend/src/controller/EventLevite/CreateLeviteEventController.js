"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateLeviteEventController;
const EventLevite_1 = require("../../schemas/EventLevite");
const CreateEvenetLeviteServer_1 = __importDefault(require("../../server/EventLevite/CreateEvenetLeviteServer"));
async function CreateLeviteEventController(req, reply) {
    try {
        const data = EventLevite_1.CreateleviteEventShema.parse(req.body);
        const newLevite = await (0, CreateEvenetLeviteServer_1.default)(data);
        return reply.status(200).send(newLevite);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create the levite of event"
        });
    }
}
