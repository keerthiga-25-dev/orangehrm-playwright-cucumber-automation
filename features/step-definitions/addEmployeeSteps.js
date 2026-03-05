const { Given, When, Then } = require("@cucumber/cucumber");
const { LoginPage } = require("../../pages/LoginPage");
const { expect } = require("@playwright/test");

let loginPage;

Given("user logs into OrangeHRM", async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
  await loginPage.login("Admin", "admin123");
});

When("user navigates to PIM", async function () {
  await this.page.click('span:has-text("PIM")');
});

When("user clicks add employee", async function () {
  await this.page.click('button:has-text("Add")');
});

When("user enters employee details", async function () {

  const randomNumber = Math.floor(Math.random() * 10000);

  const firstName = "John" + randomNumber;
  const lastName = "Doe" + randomNumber;

  await this.page.fill('input[name="firstName"]', firstName);
  await this.page.fill('input[name="lastName"]', lastName);

  await this.page.click('button:has-text("Save")');
});

Then("employee should be added successfully", async function () {
  await this.page.waitForSelector('h6:has-text("Personal Details")');
});