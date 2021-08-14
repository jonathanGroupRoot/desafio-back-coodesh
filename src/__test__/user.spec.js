const app = require("../app");
const request = require("supertest");
const connection = require("../database");

describe("Users", () => {

    //Close DB
    afterAll(() => {
        connection.close();
    });

    it("createUser", async () => {
        const response = await request(app).post("/createUser").send({
            gender: "male",
            name: {
                "title": "Mr",
                "first": "Tex",
                "last": "Alderliesten"
            },
            location: {
                street: {
                    number: 1613,
                    name: "Gerard Burgerlaan"
                },
                city: "Bergen",
                state: "Limburg",
                country: "Netherlands",
                postcode: 96884,
                coordinates: {
                    latitude: "5.5890",
                    longitude: "178.4400"
                },
                timezone: {
                    offset: "-1:00",
                    description: "Azores, Cape Verde Islands"
                }
            },
            email: "tex.alderliesten@example.com",
            login: {
                uuid: "87c424b2-df2c-447e-80bf-fc8d716cb404",
                username: "bluerabbit545",
                password: "point",
                salt: "12hMWCrP",
                md5: "30444416c0d8bb064c428274381eda40",
                sha1: "eda5326a1ee6b2999d2ac08da8dd1b7ff6eea1c7",
                sha256: "61bd84091668e992938aef8935c8d1810242b5f56d6aecb2397c07bab3548069"
            },
            dob: {
                date: "1947-03-06T06:47:48.507Z",
                age: 74
            },
            registered: {
                date: "2003-03-05T13:20:08.889Z",
                age: 18
            },
            phone: "(674)-696-3684",
            cell: "(870)-560-4285",
            id_: {
                name: "BSN",
                value: "40628458"
            },
            picture: {
                large: "https://randomuser.me/api/portraits/men/98.jpg",
                medium: "https://randomuser.me/api/portraits/med/men/98.jpg",
                thumbnail: "https://randomuser.me/api/portraits/thumb/men/98.jpg"
            },
            nat: "NL"

        });
        expect(response.ok).toBeTruthy();
    });

    it("listenUser", async () => {
        const response = await request(app).get("/users");
        expect(response.ok).toBeTruthy();
    });

    it("findUser", async () => {
        const response = await request(app).get("/users/:userId");
        expect(response.ok).toBeTruthy();
    });

    it("deleteUser", async () => {
        const response = await request(app).delete("/users/:userId");
        expect(response.ok).toBeTruthy();
    });
});