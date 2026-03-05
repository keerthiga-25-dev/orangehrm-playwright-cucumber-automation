class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = 'input[name="username"]';
    this.passwordInput = 'input[name="password"]';
    this.loginButton = 'button[type="submit"]';
    this.dashboardHeader = 'h6:has-text("Dashboard")';

    this.profileIcon = '.oxd-userdropdown-tab';
    this.logoutButton = 'a:has-text("Logout")';
  }

  async navigate() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput,username);
    await this.page.fill(this.passwordInput,password);
    await this.page.click(this.loginButton);
  }

  async verifyDashboard() {
    await this.page.waitForSelector(this.dashboardHeader);
  }

  async logout() {
    await this.page.click(this.profileIcon);
    await this.page.click(this.logoutButton);
  }
}

module.exports = { LoginPage };