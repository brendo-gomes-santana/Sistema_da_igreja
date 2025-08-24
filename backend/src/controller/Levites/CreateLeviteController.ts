import { FastifyReply, FastifyRequest } from "fastify";

import { CreateLeviteSchema } from "../../schemas/leivtes";
import CreateLeviteServer from "../../server/Levites/CreateLeviteServer";

export default async function CreateLeviteController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const body = CreateLeviteSchema.parse(request.body);
        const levite = await CreateLeviteServer(body);

        return reply.status(200).send(levite);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error creating a new levite"
        });
    }
}
