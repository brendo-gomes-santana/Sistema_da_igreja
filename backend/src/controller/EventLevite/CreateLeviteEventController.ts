import { FastifyRequest, FastifyReply } from "fastify";

import { CreateleviteEventShema } from "../../schemas/EventLevite";
import CreateLeviteEventServer from "../../server/EventLevite/CreateEvenetLeviteServer";

export default async function CreateLeviteEventController(
    req: FastifyRequest,
    reply: FastifyReply
) {

    try {   

        const data = CreateleviteEventShema.parse(req.body);
        const newLevite = await CreateLeviteEventServer(data);

        return reply.status(200).send(newLevite);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create the levite of event"
        });
    }

}