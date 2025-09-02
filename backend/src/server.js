"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const cors_1 = require("@fastify/cors");
const swagger_1 = require("@fastify/swagger");
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const auth_1 = __importDefault(require("./plugin/auth"));
const routes_1 = require("./routes");
const app = (0, fastify_1.fastify)().withTypeProvider();
app.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
app.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
app.register(cors_1.fastifyCors, {
    origin: '*',
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
});
app.register(swagger_1.fastifySwagger, {
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
    transform: fastify_type_provider_zod_1.jsonSchemaTransform
});
app.register(swagger_ui_1.default, {
    routePrefix: '/docs'
});
app.register(auth_1.default);
app.register(routes_1.routes);
app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
    console.log('HTTP server runing!');
});
