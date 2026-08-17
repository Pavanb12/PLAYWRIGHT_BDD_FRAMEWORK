const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../pages/LoginPage");
const { env } = require("../env");

Given("the user is on the OrangeHRM login page", async function () {
    await LoginPage.openApplication();
});

Given("the user is logged into OrangeHRM", async function () {
    await LoginPage.openApplication();
    await LoginPage.enterUsername(env.orangeHrmUsername);
    await LoginPage.enterPassword(env.orangeHrmPassword);
    await LoginPage.clickLogin();
    await LoginPage.verifyDashboard();
});

When("the user enters a valid username", async function () {
    await LoginPage.enterUsername(env.orangeHrmUsername);
});

When("the user enters an invalid username", async function () {
    await LoginPage.enterUsername(env.orangeHrmInvalidUsername);
});

When("the user enters a valid password", async function () {
    await LoginPage.enterPassword(env.orangeHrmPassword);
});

When("the user enters an invalid password", async function () {
    await LoginPage.enterPassword(env.orangeHrmInvalidPassword);
});

When("the user leaves the username field blank", async function () {
    await LoginPage.clearUsername();
});

When("the user leaves the password field blank", async function () {
    await LoginPage.clearPassword();
});

When("the user clicks the Login button", async function () {
    await LoginPage.clickLogin();
});

When("the user enters a password", async function () {
    await LoginPage.enterPassword(env.orangeHrmPassword);
});

When("the user logs out", async function () {
    await LoginPage.logout();
});

Then("the user should be redirected to the Dashboard", async function () {
    await LoginPage.verifyDashboard();
});

Then("the Dashboard should be displayed", async function () {
    await LoginPage.verifyDashboard();
});

Then("the login error message should be displayed", async function () {
    await LoginPage.verifyLoginErrorMessage();
});

Then("the username validation message should be displayed", async function () {
    await LoginPage.verifyUsernameValidationMessage();
});

Then("the password validation message should be displayed", async function () {
    await LoginPage.verifyPasswordValidationMessage();
});

Then("the required field validation messages should be displayed", async function () {
    await LoginPage.verifyRequiredFieldValidationMessages();
});

Then("the password should be displayed as masked characters", async function () {
    await LoginPage.verifyPasswordMasked();
});

Then("the user should be redirected to the Login page", async function () {
    await LoginPage.verifyLoginPageDisplayed();
});
