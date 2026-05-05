const { When, Then } = require("@cucumber/cucumber");

When("user deletes an employee", async function () {
  await this.page.click('.oxd-icon-button i.bi-trash');
  await this.page.click('button:has-text("Yes, Delete")');
});

Then("employee should be removed", async function () {
  await this.page.waitForTimeout(2000);
});   