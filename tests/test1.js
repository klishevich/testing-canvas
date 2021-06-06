const puppeteer = require("puppeteer");

// const url = "https://example.com";
const url = "http://localhost:5000";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("#scichart-root", {
    visible: true,
  });
  await page.screenshot({
    path: "tests/test1.png",
    clip: { x: 0, y: 0, width: 900, height: 600 },
  });

  await browser.close();
})();
