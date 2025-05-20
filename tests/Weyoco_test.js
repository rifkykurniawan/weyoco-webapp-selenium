const {Builder, until,Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const HomePage = require('../src/Pages/HomePage');
const PostPage = require('../src/Pages/PostPage');

describe('Weyoco Website', function() {
    let driver;
    let homePage;
    let postPage;

    this.timeout(10000);
    beforeEach(async function() {
        const options = new chrome.Options();
        // options.addArguments('--headless');
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();     
        homePage = new HomePage(driver);
        postPage = new PostPage(driver);
        await driver.manage().window().maximize();
        await driver.get('https://weyoco.com');
    });

    it('TC-001 - Verify the home page', async () => {
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
    it ('TC-002 - Verify click collaboration menu', async () => {
        await homePage.clickCollaborationButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://weyoco.com/en/posts');
    })
    it ('TC-003 - Verify click each topic', async () => {
        await homePage.clickBakingSubTopics();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=Baking'), 5000);
        assert.strictEqual(await homePage.getButtonCssBakingTopics(), 'rgba(255, 73, 20, 1)');
        await homePage.clickForBeginnerTopic();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=For+beginner'), 5000);
        assert.strictEqual(await homePage.getButtonCssForBeginnerTopics(), 'rgba(255, 73, 20, 1)');
        await homePage.clickOldRecipesTopic();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=Old+recipes'), 5000);
        assert.strictEqual(await homePage.getButtonCssForOldRecipesTopic(), 'rgba(255, 73, 20, 1)');
        await homePage.clickVegetarianTopic();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=Vegetarian'), 5000);
        assert.strictEqual(await homePage.getButtonCssForVegetarianTopic(), 'rgba(255, 73, 20, 1)');
        await homePage.clickRiceCookerTopic();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=Rice+cooker+recipes'), 5000);
        assert.strictEqual(await homePage.getButtonCssForRiceCookerTopic(), 'rgba(255, 73, 20, 1)');
        await homePage.clickRecipeFromCookingTopic();
        await driver.wait(until.urlIs('https://weyoco.com/en/posts?category=Recipes+from+cooking+shows'), 5000);
        assert.strictEqual(await homePage.getButtonCssForRecipeFromCookingTopic(), 'rgba(255, 73, 20, 1)');
    })
    it ('TC-004 - Verify click post card', async () => {
        await homePage.clickCard1();
        await postPage.isThankButtonDisplayed();
        await driver.navigate().back();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://weyoco.com/en/posts');
    })
    it ('TC-005 - Verify display post page', async () => {
        await homePage.clickCard1();
        await postPage.isBackButtonDisplayed();
        await postPage.isThankButtonDisplayed();
        await postPage.isShareButtonDisplayed();
        await postPage.isSaveButtonDisplayed();
        await postPage.isDiscussionButtonDisplayed();
        await postPage.isDownloadAppButtonDisplayed();
        await postPage.isNavigateToTopButtonDisplayed();
    })
    it ('TC-006 - Verify click thank you button', async () => {
        await homePage.clickCard1();
        await postPage.clickThankButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
    })
    it ('TC-007 - Verify Try The App Banner', async () => {
        await homePage.clickCard1();
        await postPage.clickThankButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
        assert.strictEqual(await postPage.isBarcode_bannerDisplayed(), true);
        assert.strictEqual(await postPage.isMessage_bannerDisplayed(), true);
        assert.strictEqual(await postPage.isTitle_bannerDisplayed(), true);
        assert.strictEqual(await postPage.isXButton_bannerDisplayed(), true);
        assert.strictEqual(await postPage.isAppleButton_bannerDisplayed(), true);
        assert.strictEqual(await postPage.isAndroidButton_bannerDisplayed(), true);
    })

    it ('TC-008 - Verify click share button', async () => {
        await homePage.clickCard1();
        await postPage.clickShareButton();
        assert.strictEqual(await postPage.isShareToastDisplayed(), true);
    })
    it ('TC-009 - Verify click save button', async () => {
        await homePage.clickCard1();
        await postPage.clickSaveButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
    })
    it ('TC-010 - Verify click discussion button', async () => {
        await homePage.clickCard1();
        await postPage.clickDiscussionButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
    })
    it ('TC-011 - Verify click download app button', async () => {
        await homePage.clickCard1();
        await postPage.clickDownloadAppButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
    })
    it ('TC-012 - Verify click scroll to top button', async () => {
        await homePage.clickCard1();
        await driver.sleep(1000);
        await postPage.scrollToBottom();
        await postPage.clickScrollToTopButton();
    })
    it ('TC-013 - Verify click back button inside the post page', async () => {
        await homePage.clickCard1();
        await postPage.clickBackButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://weyoco.com/en/posts');
    })
    it ('TC-014 - Verify search content', async () => {
        await homePage.setSearchInput('Baking');
        await driver.actions().sendKeys(Key.ENTER).perform();
        assert.strictEqual(await homePage.isContentCardDisplayed(), true);
    })
    it ('TC-015 - Verify click try the app button', async () => {
        await homePage.clickTryTheAppButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
    })
    it ('TC-016 - Verify click change language button', async () => {
        await homePage.clickChangeLanguageButton();
        await driver.sleep(1000);
        assert.strictEqual(await homePage.isEnglishLanguageDisplayed(), true);
        assert.strictEqual(await homePage.isIndonesiaLanguageDisplayed(), true);
    })
    it ('TC-017 - Verify change the language to Indonesia', async () => {
        await homePage.clickChangeLanguageButton();
        await homePage.clickIndonesiaLanguage();
        assert.strictEqual(await homePage.getIndonesiaButtonText(), 'ID');
    })
    it ('TC-018 - Verify change the language to English', async () => {
        await homePage.clickChangeLanguageButton();
        await homePage.clickIndonesiaLanguage();
        assert.strictEqual(await homePage.getIndonesiaButtonText(), 'ID');
        await homePage.clickChangeLanguageButton();
        await homePage.clickEnglishLanguage();
        assert.strictEqual(await homePage.getEnglishButtonText(), 'EN');
    })
    it ('TC-019 - Verify update views numbers', async () => {
        const initialCount = await homePage.getViewCountNumber();
        await homePage.clickCard1();
        await driver.executeScript("window.location.href = 'https://weyoco.com';");
        const updatedCount = await homePage.getViewCountNumber();
        assert.strictEqual(
            updatedCount,
            initialCount + 1,
            `Expected view count to increase by 1 (was ${initialCount}, now ${updatedCount})`
        );
    })
    it('TC-020 - Verify click request join button inside the collaboration post page', async () => {
        await homePage.clickCollaborationButton();
        await driver.sleep(1000)
        await homePage.isCollaborationButtonActive();
        await homePage.clickCollaborationCard1();
        assert.strictEqual(await postPage.isJoinCollaborationButtonDisplayed(), true);
        await postPage.clickJoinCollaborationButton();
        assert.strictEqual(await postPage.isTryTheAppBannerDisplayed(), true);
    })
    it('TC-021 - Verify click back inside the collaboration post page', async () => {
        await homePage.clickCollaborationButton();
        await driver.sleep(1000)
        await homePage.isCollaborationButtonActive();
        await homePage.clickCollaborationCard1();
        await postPage.clickBackButton();
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'https://weyoco.com/en/collaborations');
    })

    afterEach(async () => {
        if (driver) {
            await driver.quit();
        }
    });
});