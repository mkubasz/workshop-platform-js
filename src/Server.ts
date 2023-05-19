import { fastify } from "fastify";
import { pino } from "pino";
import { Application } from "./Application";

(async () => {
    async function DatabaseConfig() {
        return {
            db: null,
            connection: null,
        }
    }

    const { db, connection } = await DatabaseConfig();
    const { routes } = Application({});

    const host = process.env.HOST || "localhost";
    const port = Number(process.env.PORT) || 3000;
    const logger = pino({ name: "Scripts" });
    const server = fastify({ logger });
    routes.flat().map(route => server.route(route));

    await (async () => {
        try {
            await server.listen({port, host});
        } catch (err) {
            server.log.error(err)
            process.exit(1)
        }
    })();
})();