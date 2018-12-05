module.exports.config = {
  baseUrl: "https://automacaocombatista.herokuapp.com",
  specs: ["./*.spec.js"],
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless"]
    }
  },
  onPrepare() {
    browser.ignoreSynchronization = true;
  }
};
