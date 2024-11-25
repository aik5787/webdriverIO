import { expect } from "@wdio/globals";
import loginPage from "../../pageobjects/login.page.js";
import dashboardPage from "../../pageobjects/dashboard.page.js";
import dotenv from 'dotenv';

dotenv.config();

describe("Login", () => {
  before(async () => {
    await loginPage.open();
    await loginPage.login(process.env.ADMINEMAIL, process.env.ADMINPASSWORD);
  });


  it.skip("should login with valid credentials @smoke", async () => {
    await expect(dashboardPage.userIcon).toBeExisting();
  });

  it.skip("Should log out", async () => {
    await dashboardPage.userIcon.click();
    // let logoutLink = await $('li=Logout')
    await dashboardPage.logoutLink.click();

    await expect(browser).toHaveUrl('https://dev.delekhomes.com/auth/login')
    await expect(browser).toHaveTitle('Login | Delek Homes');  
});
});
