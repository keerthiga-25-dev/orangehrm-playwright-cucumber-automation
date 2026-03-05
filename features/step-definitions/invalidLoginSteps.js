const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");

let loginPage;

Given("user is on the login page", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When("user enters invalid username {string} and password {string}", async function (username, password) {
  await loginPage.login(username, password);
});

When("user clicks the login button", async function () {
  // already handled inside login()
});

Then("error message should be displayed", async function () {
  const error = await this.page.locator(".oxd-alert-content-text");
  await expect(error).toBeVisible();
});