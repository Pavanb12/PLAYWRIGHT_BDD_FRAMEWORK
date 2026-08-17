const path = require("path");
const dotenv = require("dotenv");

const result = dotenv.config({ path: path.resolve(__dirname, "../.env") });
if (result.error) {
  throw result.error;
}

const env = {
  orangeHrmUrl: process.env.ORANGE_HRM_URL,
  orangeHrmUsername: process.env.ORANGE_HRM_USERNAME,
  orangeHrmPassword: process.env.ORANGE_HRM_PASSWORD,
  orangeHrmInvalidUsername: process.env.ORANGE_HRM_INVALID_USERNAME,
  orangeHrmInvalidPassword: process.env.ORANGE_HRM_INVALID_PASSWORD,
  usernameSelector: "input[name='username']",
  passwordSelector: "input[name='password']",
};

module.exports = { env };
