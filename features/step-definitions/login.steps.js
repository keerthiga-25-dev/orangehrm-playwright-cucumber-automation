const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pages/LoginPage');

let loginPage;

Given('User launches OrangeHRM application', async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When('User enters valid username and password', async function () {
  await loginPage.login('Admin', 'admin123');
});

Then('User should see the dashboard', async function () {
  await loginPage.verifyDashboard();
});

Then('User logs out', async function () {
  await loginPage.logout();
});