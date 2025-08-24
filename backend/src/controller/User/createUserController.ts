import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUser } from "../../schemas/users";

import CreateUserServer from "../../server/User/CreateUserServer";

export default async function CreateUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {

  try {

    const body = CreateUser.parse(request.body);
    const create = await CreateUserServer(body);

    return reply.status(201).send(create);

  } catch (err) {
    return reply.status(401).send({
      message: err instanceof Error ? err.message : "Erro ao logar"
    });
  }
}
