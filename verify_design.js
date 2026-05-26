const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 4500 });
  await page.goto('file://' + process.cwd() + '/index.html');
  await page.screenshot({ path: 'updated_design.png', fullPage: true });
  await browser.close();
})();
