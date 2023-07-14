import { Server } from "../Server";
import { faker } from '@faker-js/faker';
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
            title: faker.string.sample(10),
            description: faker.string.sample(10),
            agenda: faker.string.sample(10),
            attendeesCount: faker.number.int({ min: 1, max: 10 }),
            price: faker.number.int({ min: 1, max: 1000 }),
            workshopLectureRatio: "50/50",
            meetings: [
                {
                    startDate: faker.date.future(),
                    endDate: faker.date.future(),
                    meetingLocation: faker.string.sample(10),
                    agenda: faker.string.sample(10),
                }],
            trainer: {
                name: faker.name.fullName(),
                email: faker.internet.email(),
                discordNick: faker.internet.userName(),
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
