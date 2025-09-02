"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UniqueEventController;
const UniqueEventServer_1 = __importDefault(require("../../server/Events/UniqueEventServer"));
const Events_1 = require("../../schemas/Events");
async function UniqueEventController(req, reply) {
    try {
        const params = Events_1.UniqueIdEventSchema.parse(req.params);
        const detail = await (0, UniqueEventServer_1.default)(params);
        return reply.status(200).send(detail);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching event by id"
        });
    }
}
