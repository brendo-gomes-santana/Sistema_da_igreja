import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors';
import { fastifySwagger } from '@fastify/swagger';
import { validatorCompiler, serializerCompiler, jsonSchemaTransform } from 'fastify-type-provider-zod';
import fastifySwaggerUi from '@fastify/swagger-ui';


import auth from './plugin/auth';

import { routes } from './routes';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, { 
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
})



app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Typed API',
            version: '1.0.0'
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
    },

    transform: jsonSchemaTransform
})


app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

app.register(auth);
app.register(routes);

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP server runing!')
})