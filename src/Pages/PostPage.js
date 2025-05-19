const {By,until} = require('selenium-webdriver');

class PostPage {
    constructor(driver) {
        this.driver = driver;
        this.thankButton = By.xpath('/html/body/main/div[3]/button[1]')
    }

    async isThankButtonDisplayed() {
        await this.driver.wait(until.elementLocated(this.thankButton), 5000);
        const thankButton = await this.driver.findElement(this.thankButton);
        await this.driver.wait(until.elementIsVisible(thankButton), 5000);
        return await thankButton.isDisplayed();
    }
}

module.exports = PostPage;