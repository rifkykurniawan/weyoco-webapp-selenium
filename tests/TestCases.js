const {Builder, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const HomePage = require('../src/Pages/HomePage');

describe('Test Scenarios', function() {
    let driver;
    let homePage;

    this.timeout(10000);
    beforeEach(async function() {
        const options = new chrome.Options();
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();     
        homePage = new HomePage(driver);
        await driver.get('https://weyoco.com');
    });

    it('TC-HP-001 - Verify the home page', async () => {
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://weyoco.com/en/posts');
        assert.strictEqual(await homePage.isWeyocoLogoDisplayed(), true);
        assert.strictEqual(await homePage.isSearchBarDisplayed(), true);
        assert.strictEqual(await homePage.isHomeButtonDisplayed(), true);
        assert.strictEqual(await homePage.isCollaborationButtonDisplayed(), true);
        assert.strictEqual(await homePage.isChangeLanguageButtonDisplayed(), true);
        assert.strictEqual(await homePage.isContentCardDisplayed(), true);
        assert.strictEqual(await homePage.isTryTheAppButtonDisplayed(), true);
        assert.strictEqual(await homePage.isDownloadAppButtonDisplayed(), true);
        assert.strictEqual(await homePage.isScrollToTopButtonDisplayed(), true);
        assert.strictEqual(await homePage.isListTopicsButtonDisplayed(), true);
    });
    it ('TC-HP-002 - Verify click collaboration menu', async () => {
        await homePage.clickCollaborationButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://weyoco.com/en/posts');
    })
    it.only ('TC-HP-003 - Verify click each topic', async () => {
        await homePage.clickBakingSubTopics();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=Baking'), 5000);
        assert.strictEqual(await homePage.getButtonCssBakingTopics(), 'rgba(255, 73, 20, 1)');
        await homePage.clickForBeginnerTopic();
    })

    afterEach(async () => {
        if (driver) {
            await driver.quit();
        }
    });
});