const { When, Then } = require("@cucumber/cucumber");
const { SearchEmployeePage } = require("../../pages/SearchEmployeePage");

When("user searches for employee {string}", async function (name) {

  const searchEmployeePage = new SearchEmployeePage(this.page);
  await searchEmployeePage.searchEmployee(name);

});

Then("employee results should be displayed", async function () {

  const searchEmployeePage = new SearchEmployeePage(this.page);
  await searchEmployeePage.verifyEmployeeResults();

});

