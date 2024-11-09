import registarationApi from "../../api/rigistration.js";
import loginApi from "../../api/login.js";
import deleteUser from "../../api/delete.js";
import { faker } from "@faker-js/faker";
import dotenv from 'dotenv';
dotenv.config();
const adminEmail = process.env.EMAIL;
const adminPassword = process.env.PASSWORD;
const email = faker.internet.email();
const password = faker.internet.password();
const userName = faker.internet.userName();
const userSurname = faker.internet.userName();
let userId;

describe("Registration", () => {

  it("should register a new account @regression", async () => {
    userId = await registarationApi.registerNewUser(userName, userSurname, email, password);
    // const adminAccessToken = await loginApi.login(adminEmail, adminPassword);
    // console.log("adminEmail", adminEmail);
    // await deleteUser.deleteUser(userId, adminAccessToken);
  });
});
