import { FastifyReply, FastifyRequest } from "fastify";

import { ListMusicShema } from "../../schemas/musics";
import ListMusicServer from "../../server/Musics/ListMusicServer";

export default async function ListMusicController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const body = ListMusicShema.parse(request.query);
        const list = await ListMusicServer(body)

        return reply.status(200).send(list)
        
    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error list the musics"
        });
    }
}