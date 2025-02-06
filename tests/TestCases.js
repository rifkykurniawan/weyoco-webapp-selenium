const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const PageObjects = require('../src/Pages/PageObjects');

describe('Test Scenarios', function() {
    let driver;
    let pageObjects;

    this.timeout(10000);
    beforeEach(async function() {
        const options = new chrome.Options();
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();     
        pageObjects = new PageObjects(driver);
        await driver.get('https://www.google.co.id/');
    });

    
    it('Test Case 1', async () => {
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://www.google.co.id/');
        await pageObjects.search('Selenium');
        await driver.sleep(1000);
        await pageObjects.clickSearchButton();
    });

    after(() => {
        driver.quit();
    });
    
});