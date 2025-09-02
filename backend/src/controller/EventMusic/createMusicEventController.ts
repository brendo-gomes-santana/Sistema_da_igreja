import { FastifyRequest, FastifyReply } from "fastify";
import CreateMusicEventServer from "../../server/EventMusic/CreateMusicEventServer";
import { createMusicEventSchema } from "../../schemas/EventMusic";

export default async function CreateMusicEventController(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const body = createMusicEventSchema.parse(req.body);

        const create = await CreateMusicEventServer(body);

        return reply.status(200).send(create);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create new music of event"
        });
    }
}