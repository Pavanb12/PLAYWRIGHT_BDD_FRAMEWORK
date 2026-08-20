const PageFixture = require("../features/support/pageFixture");
const userData = require("../testData/userData");
class AddUserPage {
  async navigateToUserManagement() {
    await PageFixture.page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

  }

  async clickAdd() {
    await PageFixture.page
      .getByRole("button", {
        name: "Add",
      })
      .click();
  }

  async selectUserRole(role) {
    // Click User Role dropdown
    await PageFixture.page.locator(".oxd-select-text").first().click();

    // Select role
    await PageFixture.page
      .getByRole("option", {
        name: role,
      })
      .click();
  }

  async enterEmployeeName(employeeName) {
    const employeeInput =
      PageFixture.page.getByPlaceholder("Type for hints...");

    await employeeInput.fill(employeeName);

    // Wait for autocomplete results
    await PageFixture.page.waitForTimeout(1000);

    // Select employee
    await PageFixture.page
      .getByText(employeeName, {
        exact: true,
      })
      .click();
  }

  async selectStatus(status) {
    // Click User Role dropdown
    await PageFixture.page.locator(".oxd-select-text").last().click();

    // Select role
    await PageFixture.page
      .getByRole("option", {
        name: status,
      })
      .click();
  }
  async enterUsername(username) {
    await PageFixture.page.locator("//div[@id='app']/div/div/div/div/div/form/div/div/div[4]/div/div[2]/input").fill(username);
  }

  async enterPassword(password) {
    await PageFixture.page.locator("//div[@id='app']/div/div/div/div/div/form/div[2]/div/div/div/div/input").first().fill(password);
  }

  async enterConfirmPassword(confirmPassword) {
    await PageFixture.page.locator("//div[@id='app']/div/div/div/div/div/form/div[2]/div/div/div/div/input").last().fill(confirmPassword);
  }

  async clickSave() {
    await PageFixture.page
      .getByRole("button", {
        name: "Save",
      })
      .click();
  }

  async verifyUserCreated() {
    await PageFixture.page.waitForSelector("text=Successfully Saved");
  }

  async verifyRequiredMessages() {
    const count = await PageFixture.page.locator("text=Required").count();

    if (count < 2) {
      throw new Error(
        `Expected at least 2 required field validation messages, but found ${count}`,
      );
    }
  }

  async verifyPasswordMismatch() {
    await PageFixture.page.waitForSelector("text=Passwords do not match");
  }

  async verifyUsernameAlreadyExists() {
    await PageFixture.page.waitForSelector("text=Already exists");
  }
}

module.exports = new AddUserPage();
