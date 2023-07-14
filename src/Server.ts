import { fastify } from "fastify";
import { pino } from "pino";
import { Application } from "./Application";
import * as process from 'process';

export const Server = async () => {
  async function DatabaseConfig() {
    return {
      db: null,
      connection: null,
    };
  }

  const { db, connection } = await DatabaseConfig();
  const { routes } = Application({});

  const logger = pino({ name: "Workshops" });
  const server = fastify({ logger });
  server.get("/health", async (req, res) => {
    return { status: "ok" };
  });
  routes.flat().map((route) => server.route(route));
  return { server };
};

(async () => {
  await (async () => {
    const host = process.env.HOST || "localhost";
    const port = Number(process.env.PORT) || 3000;
    const { server } = await Server();
    try {
      await server.listen({ port, host });
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
    process.on('SIGTERM', () => {
      server.log.error(`Received SIGTERM`);
      server.close();
    })
  })();
})();
