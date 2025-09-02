"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateEventController;
const CreateEventServer_1 = __importDefault(require("../../server/Events/CreateEventServer"));
const Events_1 = require("../../schemas/Events");
async function CreateEventController(request, reply) {
    try {
        const body = Events_1.CreateEventSchema.parse(request.body);
        const { id } = await request.jwtVerify();
        const Create = await (0, CreateEventServer_1.default)(body, id);
        return reply.status(200).send(Create);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create the event"
        });
    }
}
