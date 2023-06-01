import { Server } from "../Server";

describe("Health service", function () {
    const close = () => Promise<void>;
    let server: any;
    beforeAll(async () => {
        ({ server } = await Server());
    });
    afterEach(async () => {
        await close();
    });

    it("health", async function () {
        const response = await server.inject({
            method: "GET",
            url: "/health",
        });

        expect(response.statusCode).toBe(200);
    });
});
