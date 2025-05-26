export default async function (fastify, opts) {
  fastify.get('/hello', {
        //documentation only
    schema: {
      description: 'Retorna uma mensagem de boas-vindas',
      tags: ['Exemplo'],
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
            result: { type: 'number' }
          }
        }
      }
    }
  }, async (request, reply) => {
        const a = 3 +1
    return { hello: 'Olá, Fastify com ESModules!', result: a };
  });
}
