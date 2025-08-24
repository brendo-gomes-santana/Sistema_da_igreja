import { FastifyRequest, FastifyReply } from "fastify";

import ListCategoriesServer from "../../server/Category/ListCategoriesServer";

export default async function ListCategoriesController(
    request: FastifyRequest,
    reply: FastifyReply
) {

    try {

        const list = await ListCategoriesServer();
        return reply.status(200).send(list)

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching the categories of musics"
        });
    }

}