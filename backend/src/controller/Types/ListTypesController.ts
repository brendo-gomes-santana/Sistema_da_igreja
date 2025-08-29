import { FastifyReply, FastifyRequest } from "fastify";
import ListTypesServer from "../../server/Types/listTypesServer";


export default async function ListTypesController(
    request:FastifyRequest,
    reply: FastifyReply
) {
    try {
        const list = await ListTypesServer();
        
        return reply.status(200).send(list);

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error searching the types levites"
        });
    }
}