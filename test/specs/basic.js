const assert = require("assert");

describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    await browser.url("https://webdriver.io");
    const title = await browser.getTitle();
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
    await browser.closeWindow();
  });
});
/**
 * in order to run this file make sure you have `webdriverio` and `devtools`
 * installed using NPM before running it:
 *
 *   $ npm install devtools webdriverio
 *
 */
// eslint-disable-next-line import/no-unresolved
// const { remote } = require("webdriverio");

// let browser;

// (async () => {
//   browser = await remote({
//     automationProtocol: "devtools",
//     capabilities: {
//       browserName: "chrome"
//     }
//   });

//   await browser.url("https://webdriver.io");

//   await browser.call(async () => {
//     const puppeteerBrowser = browser.getPuppeteer();
//     const page = (await puppeteerBrowser.pages())[0];
//     await page.setRequestInterception(true);
//     page.on("request", interceptedRequest => {
//       if (interceptedRequest.url().endsWith("webdriverio.png")) {
//         return interceptedRequest.continue({
//           url:
//             "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png"
//         });
//       }

//       interceptedRequest.continue();
//     });
//   });

//   // continue with WebDriver commands
//   await browser.refresh();
//   await browser.pause(2000);

//   await browser.deleteSession();
//   await browser.close();
// })().catch(async e => {
//   console.error(e);
//   await browser.deleteSession();
//   await browser.close();
// });
