import { FastifyRequest, FastifyReply } from "fastify";
import { IdLeviteEventShema } from "../../schemas/EventLevite";
import DeleteEventLeviteServer from "../../server/EventLevite/DeleteEventLeviteServer";

export default async function DeleteLeviteEventController(
    req: FastifyRequest,
    reply: FastifyReply
) {

    try {

        const { id } = IdLeviteEventShema.parse(req.params);

        const response = await DeleteEventLeviteServer({id})
        return reply.status(200).send(response);
        
    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error delete the levite of event"
        });
    }

}