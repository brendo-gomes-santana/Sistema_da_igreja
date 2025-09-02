"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DeleteLinkControler;
const links_1 = require("../../schemas/links");
const DeleteLinkServe_1 = __importDefault(require("../../server/Links/DeleteLinkServe"));
async function DeleteLinkControler(req, reply) {
    try {
        const { id } = links_1.DeleteLinkShema.parse(req.params);
        const deleteLink = await (0, DeleteLinkServe_1.default)({ id });
        return reply.status(200).send(deleteLink);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create links of music"
        });
    }
}
