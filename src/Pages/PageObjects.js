const {By} = require('selenium-webdriver');

class PageObjects {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = By.className('gLFyf');
        this.searchButton = By.className('gNO89b');
    }

    async search(keyword) {
        const searchInput = await this.driver.findElement(this.searchInput);
        await searchInput.sendKeys(keyword);
    }

    async clickSearchButton() {
        const searchButton = await this.driver.findElement(this.searchButton);
        await searchButton.click();
    }
}

module.exports = PageObjects;
