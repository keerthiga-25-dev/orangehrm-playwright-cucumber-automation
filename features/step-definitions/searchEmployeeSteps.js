const { When, Then } = require("@cucumber/cucumber");
;

When("user searches for employee {string}", async function (name) {
  await this.page.fill('input[placeholder="Type for hints..."]', name);
  await this.page.click('button:has-text("Search")');
});

Then("employee results should be displayed", async function () {
  await this.page.waitForSelector('.oxd-table-body');
});