"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteLeviteEventController;
const EventLevite_1 = require("../../schemas/EventLevite");
const DeleteEventLeviteServer_1 = __importDefault(require("../../server/EventLevite/DeleteEventLeviteServer"));
async function DeleteLeviteEventController(req, reply) {
    try {
        const { id } = EventLevite_1.IdLeviteEventShema.parse(req.params);
        const response = await (0, DeleteEventLeviteServer_1.default)({ id });
        return reply.status(200).send(response);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error delete the levite of event"
        });
    }
}
