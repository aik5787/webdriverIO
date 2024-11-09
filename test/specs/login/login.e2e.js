import { expect } from "@wdio/globals";
import LoginPage from "../../pageobjects/login.page.js";
import DashboardPage from "../../pageobjects/dashboard.page.js";
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

describe("Login", () => {
  // before(async () => {
  //   userId = await registarationApi.registerNewUser(userName, userSurname, email, password);
  // });

  // after(async () => {
  //   const adminAccessToken = await loginApi.login(adminEmail, adminPassword);
  //   console.log("adminEmail", adminEmail);
  //   await deleteUser.deleteUser(userId, adminAccessToken);

  // });
  it("should login with valid credentials @smoke", async () => {
    await LoginPage.open();

    await LoginPage.login('tommy1@gmail.com', "qwerty123");
    await expect(DashboardPage.userIcon).toBeExisting();

  });
});
