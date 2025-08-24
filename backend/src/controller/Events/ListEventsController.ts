import { FastifyRequest, FastifyReply } from "fastify";
import ListEventsServer from "../../server/Events/ListEventsServer";

export default async function ListEventsController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const list = await ListEventsServer();

        return reply.status(200).send(list)

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error list all events"
        });
    }
}