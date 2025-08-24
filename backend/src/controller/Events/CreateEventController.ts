import { FastifyReply, FastifyRequest } from "fastify";
import CreateEventServer from "../../server/Events/CreateEventServer";
import { CreateEventSchema } from "../../schemas/Events";
interface jwt {
    id: string,
    iat: number
}

export default async function CreateEventController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    try {

        const body = CreateEventSchema.parse(request.body)
        const { id } = await request.jwtVerify() as jwt

        const Create = await CreateEventServer(body, id)

        return reply.status(200).send(Create)

    } catch (err) {
        return reply.status(401).send({
            message: err instanceof Error ? err.message : "Error create the event"
        });
    }
}