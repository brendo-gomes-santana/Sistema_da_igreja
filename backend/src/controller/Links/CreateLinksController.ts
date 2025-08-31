import { FastifyRequest, FastifyReply } from "fastify";
import { CreateLinkShema } from "../../schemas/links";
import CreateLinkServe from "../../server/Links/CreateLinkServe";

export default async function CreateLinksController(
    req: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const { links } = CreateLinkShema.parse(req.body);
        const create = await CreateLinkServe({ links });

        return reply.status(200).send(create);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create links of music"
        });
    }
}