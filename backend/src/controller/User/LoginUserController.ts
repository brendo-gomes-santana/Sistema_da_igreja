import { FastifyRequest, FastifyReply } from "fastify";
import { LoginUserSchema } from "../../schemas/users";
import LogiUserServer from "../../server/User/LoginUserServer";

export default async function LoginUserController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
   
    const body = LoginUserSchema.parse(request.body);


    const user = await LogiUserServer(body);

    const token = await reply.jwtSign({ id: user.id });

    return reply.status(200).send({ token });

  } catch (err) {
   
    return reply.status(401).send({
      message: err instanceof Error ? err.message : "Erro ao logar"
    });
  }
}
