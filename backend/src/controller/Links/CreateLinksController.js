"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateLinksController;
const links_1 = require("../../schemas/links");
const CreateLinkServe_1 = __importDefault(require("../../server/Links/CreateLinkServe"));
async function CreateLinksController(req, reply) {
    try {
        const { links } = links_1.CreateLinkShema.parse(req.body);
        const create = await (0, CreateLinkServe_1.default)({ links });
        return reply.status(200).send(create);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create links of music"
        });
    }
}
