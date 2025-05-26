import Fastify from 'fastify';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import exampleRoutes from './routes/example.js';
import createFicha from './routes/createFicha.js';

const fastify = Fastify({ logger: true });

// Swagger config
await fastify.register(swagger, {
    swagger: {
        info: {
            title: 'API Fastify',
            description: 'Documentação da API usando Swagger',
            version: '1.0.0'
        },
        host: 'localhost:3333',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json']
    }
});

await fastify.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true
});

// Rotas
await fastify.register(exampleRoutes);
await fastify.register(createFicha);

// Start
const start = async () => {
    try {
        await fastify.listen({ port: 3333 });
        console.log('🚀 Server running at http://localhost:3333');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
