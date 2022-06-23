require('dotenv').config();
import fastify from 'fastify';
import { GoogleFunction } from './Services';

function startServer() {
  const app = fastify();
  const googleServices = new GoogleFunction();

  app.register(require('fastify-cors'), {
    origin: '*' 
  });

  app.get<{ Querystring: { placeId: string } }>('/place/geocode', async (request, reply) => {
    try {
      const { placeId } = request.query;

      if (!placeId) { throw new Error('Missing placeId parameter') }

      const data = await googleServices.geocode(placeId);
      reply.status(200).send(data);
    } catch (err) {
      console.error(`Failed to get location address. ${err.message}`);
      reply.status(500).send(`Internal server error. ${err.message}`)
    }
  });

  app.get<{ Querystring: { input: string } }>('/place/autocomplete', async (request, reply) => {
    try {
      const { input } = request.query;

      if (!input) { throw new Error('Missing input parameter') }

      const data = await googleServices.placeAutoComplete(input)
      reply.status(200).send(data);
    } catch (err) {
      console.error(`Failed to get location address. ${err.message}`);
      reply.status(500).send(`Internal server error. ${err.message}`)
    }
  });

  app.listen(8000, 'localhost', (err, address) => {
    if (err) {
      console.error('Error during starting server', err);
      process.exit(1);
    }
    console.info(`Server listening on ${address}`);
  });
}

startServer();