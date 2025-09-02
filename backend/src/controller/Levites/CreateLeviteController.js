"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateLeviteController;
const leivtes_1 = require("../../schemas/leivtes");
const CreateLeviteServer_1 = __importDefault(require("../../server/Levites/CreateLeviteServer"));
async function CreateLeviteController(request, reply) {
    try {
        const body = leivtes_1.CreateLeviteSchema.parse(request.body);
        const levite = await (0, CreateLeviteServer_1.default)(body);
        return reply.status(200).send(levite);
    }
    catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error creating a new levite"
        });
    }
}
