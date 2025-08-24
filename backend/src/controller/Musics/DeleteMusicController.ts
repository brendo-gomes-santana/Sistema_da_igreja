import { FastifyReply, FastifyRequest } from "fastify";

import UniqueMusicServer from "../../server/Musics/UniqueMusicServer";
import DeleteMusicServer from "../../server/Musics/DeleteMusicServer";
import { UniqueMusicSchema } from "../../schemas/musics";

export default async function DeleteMusicController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const params = UniqueMusicSchema.parse(request.params);

        await UniqueMusicServer(params);
        const DeleteMusic = await DeleteMusicServer(params)

        return reply.status(200).send(DeleteMusic)
        
    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error delete the musics"
        });
    }

}