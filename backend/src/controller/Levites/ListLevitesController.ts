import { FastifyReply } from "fastify";
import ListLeviteServer from "../../server/Levites/ListLeviteServer";

export default async function ListLevitesController(
    reply: FastifyReply
) {
    try {

        const list = await ListLeviteServer();
        return reply.status(200).send(list);
        
    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching the levites"
        });
    }
}