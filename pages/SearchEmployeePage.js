class SearchEmployeePage {

  constructor(page) {
    this.page = page;
    this.employeeSearchBox = 'input[placeholder="Type for hints..."]';
    this.searchButton = 'button:has-text("Search")';
    this.resultTable = '.oxd-table-body';
  }

  async searchEmployee(name) {
    await this.page.fill(this.employeeSearchBox, name);
    await this.page.click(this.searchButton);
  }

  async verifyEmployeeResults() {
    await this.page.waitForSelector(this.resultTable);
  }

}

module.exports = { SearchEmployeePage };