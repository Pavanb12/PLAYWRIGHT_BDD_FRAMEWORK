const {
    Before,
    After,
    setDefaultTimeout
} = require("@cucumber/cucumber");

const {
    chromium
} = require("playwright");

const PageFixture = require("./pageFixture");
const { env } = require("../env");

setDefaultTimeout(60000);


Before(async function () {

    PageFixture.browser =
        await chromium.launch({
            headless: false
        });

    PageFixture.context =
        await PageFixture.browser.newContext();

    PageFixture.page =
        await PageFixture.context.newPage();

    PageFixture.page.env = env;

});


After(async function (scenario) {

    if (scenario.result.status === "FAILED") {

        const screenshot =
            await PageFixture.page.screenshot({
                fullPage: true
            });

        await this.attach(
            screenshot,
            "image/png"
        );
    }


    await PageFixture.browser.close();

});