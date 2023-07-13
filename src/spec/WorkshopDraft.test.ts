import { Server } from "../Server";
import { z } from 'zod';

describe("Workshop draft process", function () {
    const close = () => Promise<void>;
    let server: any;
    beforeAll(async () => {
        ({ server } = await Server());
    });
    afterEach(async () => {
        await close();
    });

    it("should get list of all drafts", async function () {
        const response = await server.inject({
            method: "GET",
            url: "/workshop/draft",
        });

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toStrictEqual({ workshopDrafts: [] });
    });

    it("should create new draft of workshops", async function () {
        const payload = {
            title: "Draft test",
            description: "Draft test description",
            agenda: "Draft test agenda",
            attendeesCount: 10,
            price: 100,
            workshopLectureRatio: "50/50",
            meetings: [
                {
                    startDate: "2021-10-10T10:00:00.000Z",
                    endDate: "2021-10-10T12:00:00.000Z",
                    meetingLocation: "Disocrd",
                    agenda: "Draft test meeting agenda",
                }],
            trainer: {
                name: "Mateusz",
                email: "mkubasz@gmail.com",
                discordNick: "mkubasz#0001",
            }
        };

        const responsePOST = await server.inject({
            method: "POST",
            url: "/workshop/draft",
            payload,
        });

        expect(responsePOST.statusCode).toBe(201);
        const responseGET = await server.inject({
            method: "GET",
            url: "/workshop/draft",
        });
        expect(responseGET.statusCode).toBe(200);
        expect(JSON.parse(responseGET.body)).toEqual(
            {
                workshopDrafts: [
                 expect.objectContaining(
                     {
                         id: expect.any(String),
                         ...payload
                     }
                 )
                ]
            }
        );
    });

    it("should failed when workshop draft is empty", async function () {
        const payload = {
            name: "test",
        };

        const responsePOST = await server.inject({
            method: "POST",
            url: "/workshop/draft",
            payload,
        });

        expect(responsePOST.statusCode).toBe(400);
        expect(JSON.parse(responsePOST.body).error.split("\n").length).toStrictEqual(5);
    });
});
