export default async function (fastify, opts) {
  fastify.post('/create-ficha', {
    schema: {
      body: {
        type: 'object',
        required: ['nome', 'atributos'],
        properties: {
          nome: { type: 'string' },
          atributos: {
            type: 'array',
            items: {
              type: 'object',
              required: ['nome', 'valor'],
              properties: {
                nome: { type: 'string' },
                valor: { type: 'number' }
              }
            }
          }
        }
      },
      response: {
        201: {
          description: 'Ficha criada com sucesso',
          type: 'object',
          properties: {
            message: { type: 'string' },
            ficha: {
              type: 'object',
              properties: {
                nome: { type: 'string' },
                atributos: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      nome: { type: 'string' },
                      valor: { type: 'number' }
                    }
                  }
                }
              }
            }
          }
        }
      },
      tags: ['Ficha']
    }
  }, async (request, reply) => {
    const { nome, atributos } = request.body;

    const ficha = {
      nome,
      atributos
    };
    //salvar valores enviados atraves da requisiscao, no banco de dados

    return reply.code(201).send({
      message: 'Ficha criada com sucesso',
      ficha
    });
  });
}
