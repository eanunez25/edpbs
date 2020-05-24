const puppeteer = require('puppeteer');


async function scrapeProduct(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="quote-header-info"]/div[3]/div/div/span[1]');
  const txt = await el.getProperty('textContent');
  const price = await txt.jsonValue();

  console.log({price})

  browser.close();
}
 
scrapeProduct('https://finance.yahoo.com/quote/%5ERUT?p=^RUT')