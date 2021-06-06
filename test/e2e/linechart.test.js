// test('adds 1 + 2 to equal 3', () => {
//     expect(1+2).toBe(3);
// });

const url = "http://localhost:5000";

// jest-image-snapshot custom configuration
function getConfig() {
  return {
    diffDirection: "vertical",
    // useful on CI (no need to retrieve the diff image, copy/paste image content from logs)
    dumpDiffToConsole: true,
    // use SSIM to limit false positive
    // https://github.com/americanexpress/jest-image-snapshot#recommendations-when-using-ssim-comparison
    comparisonMethod: "ssim",
    failureThreshold: 0.001,
    failureThresholdType: 'percent'
  };
}

test("test 1", async () => {
  // Redirect the current page in the browser to a new url with puppeteer
  const response = await page.goto(url);

  // Be sure the page is displayed correctly with puppeteer & Jest
  expect(response.status()).toBe(200);

  await expect(page.title()).resolves.toMatch(
    "Testing SciChart with Puppeteer"
  );

  await page.waitForSelector("#scichart-root", {
    visible: true,
  });

  // Take the screenshot of the page with puppeteer
  const image = await page.screenshot({
    clip: { x: 0, y: 0, width: 900, height: 600 },
  });
  // await page.screenshot({
  //   path: "test/e2e/linechart.png",
  //   clip: { x: 0, y: 0, width: 900, height: 600 },
  // });

  // Compare the taken screenshot with the baseline screenshot (if exists), or create it (else)
  const config = getConfig();
  expect(image).toMatchImageSnapshot(config);
});
