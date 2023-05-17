import {Application} from "./Application";

(async () => {
    async function DatabaseConfig() {
        return {
            db: null,
            connection: null,
        }
    }

    const { db, connection } = await DatabaseConfig();
    const { app } = Application({});
    const host = process.env.HOST || "localhost";
    const port = Number(process.env.PORT) || 3000;
    app.listen(port, host, undefined,() => {
        console.log(`Server is running on http://${host}:${port}`);
    });
})();