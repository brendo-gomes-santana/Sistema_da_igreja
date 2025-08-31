import { FastifyRequest, FastifyReply } from "fastify";

import { DeleteLinkShema } from "../../schemas/links";
import DeleteLinkServer from "../../server/Links/DeleteLinkServe";

export default async function DeleteLinkControler(
    req: FastifyRequest,
    reply: FastifyReply
) {

    try {

        const { id } = DeleteLinkShema.parse(req.params);
        const deleteLink = await DeleteLinkServer({ id });

        return reply.status(200).send(deleteLink);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create links of music"
        });
    }

}