// import registrationApi from "../../api/rigistrationApi.js";
// import loginApi from "../../api/loginApi.js";
// import deleteUserApi from "../../api/deleteUserApi.js";
// import { faker } from "@faker-js/faker";
// import dotenv from 'dotenv';

// dotenv.config();

// const email = faker.internet.email();
// const password = faker.internet.password();
// const userName = faker.internet.userName();
// const userSurname = faker.internet.userName();
// let userId;

// describe("Registration", () => {

//   it("should register a new account via API @regression", async () => {
//     userId = await registrationApi.registerNewUser(userName, userSurname, email, password);
//     const adminAccessToken = await loginApi.login(process.env.ADMINEMAIL, process.env.ADMINPASSWORD);
//     await deleteUserApi.deleteUser(userId, adminAccessToken);
//   });
// });