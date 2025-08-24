import { FastifyRequest, FastifyReply } from "fastify";
import CreateMusicServer from "../../server/Musics/CreateMusicServer";

import { CreateMusicSchema } from "../../schemas/musics";

export default async function CreateMusicController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const body = CreateMusicSchema.parse(request.body);
        const create = await CreateMusicServer(body)

        return reply.status(200).send(create);
    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error creating a new music"
        });

    }
}