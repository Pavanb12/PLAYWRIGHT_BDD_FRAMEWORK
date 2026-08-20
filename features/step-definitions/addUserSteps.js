const { Given, When, Then } = require("@cucumber/cucumber");

const AddUserPage = require("../../pages/addUserPage");

const userData = require("../../testData/userData");

// ================================
// Background
// ================================

Given("the user is on the User Management page", async function () {
  await AddUserPage.navigateToUserManagement();
});

// ================================
// Add User
// ================================

When("the user clicks the Add button", async function () {
  await AddUserPage.clickAdd();
});

When("the user selects the user role", async function () {
  await AddUserPage.selectUserRole(userData.validUser.role);
});

When("the user enters the employee name", async function () {
  await AddUserPage.enterEmployeeName(userData.validUser.employeeName);
});

When("the user selects the Status", async function () {
  await AddUserPage.selectStatus(userData.validUser.status);
});
 
When("the user enters the username", async function () {
  await AddUserPage.enterUsername(userData.validUser.username);
});

When("the user enters the password", async function () {
  await AddUserPage.enterPassword(userData.validUser.password);
});

When("the user confirms the password", async function () {
  await AddUserPage.enterConfirmPassword(userData.validUser.password);
});

When("the user enters a different confirmation password", async function () {
  await AddUserPage.enterConfirmPassword(
    userData.mismatchPasswordUser.confirmPassword,
  );
});

When("the user enters an existing username", async function () {
  await AddUserPage.enterUsername(userData.existingUser.username);
});

// ================================
// Save
// ================================

When("the user clicks the Save button", async function () {
  await AddUserPage.clickSave();
});

// ================================
// Validations
// ================================

Then("the new user should be created successfully", async function () {
  await AddUserPage.verifyUserCreated();
});

Then(
  "the Add User required field validation messages should be displayed",
  async function () {
    await AddUserPage.verifyRequiredMessages();
  },
);

Then(
  "the password mismatch validation message should be displayed",
  async function () {
    await AddUserPage.verifyPasswordMismatch();
  },
);

Then(
  "the username already exists message should be displayed",
  async function () {
    await AddUserPage.verifyUsernameAlreadyExists();
  },
);
