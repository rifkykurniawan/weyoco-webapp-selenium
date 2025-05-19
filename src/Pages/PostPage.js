const {By,until} = require('selenium-webdriver');

class PostPage {
    constructor(driver) {
        this.driver = driver;
        this.thankButton = By.xpath('/html/body/main/div[3]/button[1]')
        this.shareButton = By.xpath('/html/body/main/div[3]/button[2]')
        this.saveButton = By.xpath('/html/body/main/div[3]/button[3]')
        this.discussionButton = By.xpath('/html/body/main/div[3]/button[4]')
        this.downloadAppButton = By.xpath('/html/body/main/div[3]/button[5]')
        this.navigateToTopButton = By.xpath('/html/body/main/div[3]/button[6]')
        this.backButton = By.xpath('/html/body/main/div[1]/button')
        
        this.tryTheAppBanner = By.xpath("//div[@role='dialog' and .//h4[text()='Try the App']]");

        this.barcode_banner = By.xpath("//img[@alt='weyoco-app-qr']");
        this.message_banner = By.xpath("//p[text()='Discover more content and join some information by scan QR or install from AppStore and PlayStore.']");
        this.title_banner = By.xpath("//h4[text()='Try the App']");
        this.xButton_banner = By.xpath("//button[.//span[text()='Close']]");
        this.appleButton_banner = By.xpath("//img[@alt='app-store']");
        this.androidButton_banner = By.xpath("//img[@alt='google-play']");
        this.shareToast = By.xpath('/html/body/section')
    }
    async clickBackButton() {
        await this.driver.wait(until.elementLocated(this.backButton), 5000);
        const backButton = await this.driver.findElement(this.backButton);
        await this.driver.wait(until.elementIsVisible(backButton), 5000);
        await backButton.click();
    }

    async clickScrollToTopButton() {
        await this.driver.wait(until.elementLocated(this.navigateToTopButton), 5000);
        const navigateToTopButton = await this.driver.findElement(this.navigateToTopButton);
        await this.driver.wait(until.elementIsVisible(navigateToTopButton), 5000);
        await navigateToTopButton.click();
    }

    async scrollToBottom() {
        let lastHeight = await this.driver.executeScript('return document.body.scrollHeight');

        while (true) {
            await this.driver.executeScript('window.scrollTo(0, document.body.scrollHeight);');
            await this.driver.sleep(1000);

            let newHeight = await this.driver.executeScript('return document.body.scrollHeight');
            if (newHeight === lastHeight) break;

            lastHeight = newHeight;
        }
    }

    async clickDownloadAppButton() {
        await this.driver.wait(until.elementLocated(this.downloadAppButton), 5000);
        const downloadAppButton = await this.driver.findElement(this.downloadAppButton);
        await this.driver.wait(until.elementIsVisible(downloadAppButton), 5000);
        await downloadAppButton.click();
    }
    async clickDiscussionButton() {
        await this.driver.wait(until.elementLocated(this.discussionButton), 5000);
        const discussionButton = await this.driver.findElement(this.discussionButton);
        await this.driver.wait(until.elementIsVisible(discussionButton), 5000);
        await discussionButton.click();
    }

    async clickSaveButton() {
        await this.driver.wait(until.elementLocated(this.saveButton), 5000);
        const saveButton = await this.driver.findElement(this.saveButton);
        await this.driver.wait(until.elementIsVisible(saveButton), 5000);
        await saveButton.click();
    }
    async isShareToastDisplayed() {
        await this.driver.wait(until.elementLocated(this.shareToast), 5000);
        const shareToast = await this.driver.findElement(this.shareToast);
        await this.driver.wait(until.elementIsVisible(shareToast), 5000);
        return await shareToast.isDisplayed();
    }
    async clickShareButton() {
        await this.driver.wait(until.elementLocated(this.shareButton), 5000);
        const shareButton = await this.driver.findElement(this.shareButton);
        await this.driver.wait(until.elementIsVisible(shareButton), 5000);
        await shareButton.click();
    }
    async isAndroidButton_bannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.androidButton_banner), 5000);
        const androidButton_banner = await this.driver.findElement(this.androidButton_banner);
        await this.driver.wait(until.elementIsVisible(androidButton_banner), 5000);
        return await androidButton_banner.isDisplayed();
    }
    async isAppleButton_bannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.appleButton_banner), 5000);
        const appleButton_banner = await this.driver.findElement(this.appleButton_banner);
        await this.driver.wait(until.elementIsVisible(appleButton_banner), 5000);
        return await appleButton_banner.isDisplayed();
    }
    async isXButton_bannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.xButton_banner), 5000);
        const xButton_banner = await this.driver.findElement(this.xButton_banner);
        await this.driver.wait(until.elementIsVisible(xButton_banner), 5000);
        return await xButton_banner.isDisplayed();
    }
    async isTitle_bannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.title_banner), 5000);
        const title_banner = await this.driver.findElement(this.title_banner);
        await this.driver.wait(until.elementIsVisible(title_banner), 5000);
        return await title_banner.isDisplayed();
    }
    async isMessage_bannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.message_banner), 5000);
        const message_banner = await this.driver.findElement(this.message_banner);
        await this.driver.wait(until.elementIsVisible(message_banner), 5000);
        return await message_banner.isDisplayed();
    }
    async isBarcode_bannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.barcode_banner), 5000);
        const barcode_banner = await this.driver.findElement(this.barcode_banner);
        await this.driver.wait(until.elementIsVisible(barcode_banner), 5000);
        return await barcode_banner.isDisplayed();
    }

    async isTryTheAppBannerDisplayed() {
        await this.driver.wait(until.elementLocated(this.tryTheAppBanner), 5000);
        const tryTheAppBanner = await this.driver.findElement(this.tryTheAppBanner);
        await this.driver.wait(until.elementIsVisible(tryTheAppBanner), 5000);
        return await tryTheAppBanner.isDisplayed();
    }

    async clickThankButton() {
        await this.driver.wait(until.elementLocated(this.thankButton), 5000);
        const thankButton = await this.driver.findElement(this.thankButton);
        await this.driver.wait(until.elementIsVisible(thankButton), 5000);
        await thankButton.click();
    }

    async isBackButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.backButton), 5000);
        const backButton = await this.driver.findElement(this.backButton);
        await this.driver.wait(until.elementIsVisible(backButton), 5000);
        return await backButton.isDisplayed();
    }

    
    async isNavigateToTopButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.navigateToTopButton), 5000);
        const navigateToTopButton = await this.driver.findElement(this.navigateToTopButton);
        await this.driver.wait(until.elementIsVisible(navigateToTopButton), 5000);
        return await navigateToTopButton.isDisplayed();
    }

    async isDownloadAppButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.downloadAppButton), 5000);
        const downloadAppButton = await this.driver.findElement(this.downloadAppButton);
        await this.driver.wait(until.elementIsVisible(downloadAppButton), 5000);
        return await downloadAppButton.isDisplayed();
    }

    async isDiscussionButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.discussionButton), 5000);
        const discussionButton = await this.driver.findElement(this.discussionButton);
        await this.driver.wait(until.elementIsVisible(discussionButton), 5000);
        return await discussionButton.isDisplayed();
    }

    async isSaveButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.saveButton), 5000);
        const saveButton = await this.driver.findElement(this.saveButton);
        await this.driver.wait(until.elementIsVisible(saveButton), 5000);
        return await saveButton.isDisplayed();
    }

    async isShareButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.shareButton), 5000);
        const shareButton = await this.driver.findElement(this.shareButton);
        await this.driver.wait(until.elementIsVisible(shareButton), 5000);
        return await shareButton.isDisplayed();
    }

    async isThankButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.thankButton), 5000);
        const thankButton = await this.driver.findElement(this.thankButton);
        await this.driver.wait(until.elementIsVisible(thankButton), 5000);
        return await thankButton.isDisplayed();
    }
}

module.exports = PostPage;