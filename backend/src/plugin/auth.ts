import fp from "fastify-plugin";
import fastifyJwt from "@fastify/jwt";
import { FastifyReply, FastifyRequest } from "fastify";

export default fp(async function (app) {
  app.register(fastifyJwt, {
    secret: process.env.SECRET as string,
  });

  app.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify(); 
      } catch (err) {
        return reply.status(401).send({ message: "Não autorizado" });
      }
    }
  );
});
