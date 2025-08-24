import { FastifyReply, FastifyRequest } from "fastify";

import { UniqueMusicSchema } from "../../schemas/musics";
import UniqueMusicServer from "../../server/Musics/UniqueMusicServer";

export default async function UniqueMusicController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const params = UniqueMusicSchema.parse(request.params);
        const music = await UniqueMusicServer(params);

        return reply.status(200).send(music)

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching the music"
        });
    }
}