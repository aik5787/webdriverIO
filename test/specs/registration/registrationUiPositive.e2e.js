import { faker } from "@faker-js/faker";
import dashboardPage from "../../pageobjects/dashboard.page.js";
import registrationPage from "../../pageobjects/registration.page.js";
import userCredentials from "../../fixture/userCredentials.json";
import loginApi from "../../api/loginApi.js";
import deleteUserApi from "../../api/deleteUserApi.js";
import dotenv from "dotenv";

dotenv.config();

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.internet.userName();
const lastName = faker.name.lastName();

describe("Registration Positive scenario", () => {
  beforeEach(async () => {
    await browser.url("/auth/register");
  });

  after(async () => {
    const adminAccessToken = await loginApi.login(process.env.ADMINEMAIL, process.env.ADMINPASSWORD);
    const userId = await browser.sharedStore.get("userId");
    await deleteUserApi.deleteUser(userId, adminAccessToken);
    await browser.sharedStore.set("userId",'');
  });

  it("Should register a new account via UI", async () => {
    await browser.setupInterceptor();

    await registrationPage.registration(firstName, lastName, email, password);
    await browser.pause(3000);

    const requests = await browser.getRequests();
    const request = requests.find((req) => req.url.includes("api/users/registration"));

    const userId = request.response.body.user.id;
    await browser.sharedStore.set("userId", userId);
    // const accessToken = request.response.body.accessToken;
    // await browser.execute((token) => {
    //   localStorage.setItem("accessToken", token);
    // }, accessToken);

    await expect(dashboardPage.roleLbl).toHaveText(userCredentials.user.role);
    await expect(dashboardPage.nameLbl).toHaveText(`${firstName} ${lastName}`);
    await expect(browser).toHaveTitle("User: Profile | Delek Homes");
  });

});
