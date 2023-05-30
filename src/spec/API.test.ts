import { after, before, describe, it } from "node:test";
import assert from "node:assert";
import { Server } from "../Server";

describe("Script service", function () {

    let close: () => Promise<void>;
    let server: any;
    after(async () => {
        await close();
    });

    it("health", async function () {
        ({ server } = await Server());
        const response = await server.inject({
            method: "GET",
            url: "/health",
        });

        assert.equal(response.statusCode, 200, 'returns a status code of 200')
    });
});
