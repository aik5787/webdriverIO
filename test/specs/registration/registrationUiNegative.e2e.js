import { faker } from "@faker-js/faker";
import registrationPage from "../../pageobjects/registration.page.js";
import userCredentials from "../../fixture/userCredentials.json";
import registrationValidationErrors from "../../fixture/registrationValidationErrors.json";
import dotenv from "dotenv";

dotenv.config();

const password = faker.internet.password();
const firstName = faker.internet.username();
const lastName = faker.internet.username();

describe("Registration Negative scenario", () => {
  beforeEach(async () => {
    await browser.url("/auth/register");
  });

    it("Should not register with an already existing email account", async () => {
      await registrationPage.registration(firstName, lastName, userCredentials.realtor.email, password);

      await expect(registrationPage.alertMssg).toBeExisting();
      await expect(registrationPage.alertMssg).toHaveText(registrationValidationErrors.validationFailed);
    });

    it("Should not register without filling in required fields", async () => {
      await registrationPage.submitBtn.click();

      await expect($(`//*[text()='${registrationValidationErrors.firstNameRequired}']`)).toBeExisting();
      await expect($(`//*[text()='${registrationValidationErrors.lastNameRequired}']`)).toBeExisting();
      await expect($(`//*[text()='${registrationValidationErrors.emailRequired}']`)).toBeExisting();
      await expect($(`//*[text()='${registrationValidationErrors.passwordRequired}']`)).toBeExisting();
    });
});
