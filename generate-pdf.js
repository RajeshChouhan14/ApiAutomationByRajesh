const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${process.cwd()}/allure-report/index.html`, {
    waitUntil: "networkidle0",
  });
  await page.pdf({ path: "allure-report/allure-report.pdf", format: "A4" });

  await browser.close;
})();
