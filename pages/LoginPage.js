const PageFixture = require("../features/support/pageFixture");

class LoginPage {

    async openApplication() {
        await PageFixture.page.goto(PageFixture.page.env.orangeHrmUrl);
    }

    async enterUsername(username) {
        await PageFixture.page.fill(PageFixture.page.env.usernameSelector, username);
    }

    async enterPassword(password) {
        await PageFixture.page.fill(PageFixture.page.env.passwordSelector, password);
    }

    async clearUsername() {
        await PageFixture.page.fill(PageFixture.page.env.usernameSelector, "");
    }

    async clearPassword() {
        await PageFixture.page.fill(PageFixture.page.env.passwordSelector, "");
    }

    async clickLogin() {
        await PageFixture.page.click("button[type='submit']");
    }

    async verifyDashboard() {
        await PageFixture.page.waitForSelector("text=Dashboard");
    }

    async verifyLoginErrorMessage() {
        await PageFixture.page.waitForSelector("text=Invalid credentials");
    }

    async verifyUsernameValidationMessage() {
        await PageFixture.page.waitForSelector("text=Required");
    }

    async verifyPasswordValidationMessage() {
        await PageFixture.page.waitForSelector("text=Required");
    }

    async verifyRequiredFieldValidationMessages() {
        const count = await PageFixture.page.locator("text=Required").count();
        if (count < 2) {
            throw new Error("Expected required field validation messages for username and password.");
        }
    }

    async verifyPasswordMasked() {
        const type = await PageFixture.page.getAttribute(PageFixture.page.env.passwordSelector, "type");
        if (type !== "password") {
            throw new Error("Password field is not masked.");
        }
    }

    async logout() {
        await PageFixture.page.click("//img[contains(@src, 'empNumber')]/preceding::span[contains(@class, 'userdropdown')]");
        await PageFixture.page.click("text=Logout");
    }

    async verifyLoginPageDisplayed() {
        await PageFixture.page.waitForSelector(PageFixture.page.env.usernameSelector);
    }

}

module.exports = new LoginPage();
