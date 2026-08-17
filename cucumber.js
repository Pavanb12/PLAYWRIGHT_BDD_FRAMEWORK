module.exports = {
    default: {
        require: [
            "features/step-definitions/**/*.js",
            "features/support/**/*.js"
        ],

        format: [
            "progress",
            "@cucumber/html-formatter:reports/cucumber-report.html",
            "allure-cucumberjs/reporter"
        ],

        publishQuiet: true
    }
};
 module.exports = { default: '--publish-quiet' }   