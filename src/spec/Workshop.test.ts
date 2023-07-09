import { Server } from "../Server";

describe("Workshop service", function () {
    const close = () => Promise<void>;
    let server: any;
    beforeAll(async () => {
        ({ server } = await Server());
    });
    afterEach(async () => {
        await close();
    });

    it("should get empty list", async function () {
        const response = await server.inject({
            method: "GET",
            url: "/script",
        });

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toStrictEqual({ scripts: [] });
    });

    it("should add new workshop", async function () {
        const payload = {
            name: "test",
            script: "test",
        };

        const responsePOST = await server.inject({
            method: "POST",
            url: "/script",
            payload,
        });

        expect(responsePOST.statusCode).toBe(201);
        const responseGET = await server.inject({
            method: "GET",
            url: "/script",
        });
        expect(responseGET.statusCode).toBe(200);
        expect(JSON.parse(responseGET.body)).toStrictEqual({ scripts: [payload] });
    });

    it("should failed when workshop is empty", async function () {
        const payload = {
            name: "test",
        };

        const responsePOST = await server.inject({
            method: "POST",
            url: "/script",
            payload,
        });

        expect(responsePOST.statusCode).toBe(400);
        expect(JSON.parse(responsePOST.body)).toStrictEqual({ error: "Error: Failed to parse Required properties: workshop." });
    });
});
