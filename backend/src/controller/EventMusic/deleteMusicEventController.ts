import { FastifyRequest, FastifyReply } from "fastify";

import { DeleteMusicEventShema } from "../../schemas/EventMusic";
import DeleteMusicEventServer from "../../server/EventMusic/DeleteMusicEventServer";

export default async function DeleteMusicEventController(
    req: FastifyRequest,
    reply: FastifyReply
) {

    try {

        const { id } = DeleteMusicEventShema.parse(req.params);
        const MusicEvent = await DeleteMusicEventServer({ id });

        return reply.status(200).send(MusicEvent);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error delete music of event"
        });
    }

}