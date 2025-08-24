import { FastifyRequest, FastifyReply } from "fastify";

import UniqueEventServer from "../../server/Events/UniqueEventServer";
import { UniqueIdEventSchema } from "../../schemas/Events";

export default async function UniqueEventController(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const params = UniqueIdEventSchema.parse(req.params);

        const detail = await UniqueEventServer(params);

        return reply.status(200).send(detail);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching event by id"
        });
    }
}