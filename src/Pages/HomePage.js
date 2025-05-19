const {By,until} = require('selenium-webdriver');

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.searchInput = By.className('gLFyf');
        this.searchButton = By.className('gNO89b');
        this.weyocoLogo = By.css('img[src="/weyoco.svg"]');
        this.searchBar = By.xpath('/html/body/header/div/div[2]/input')
        this.homeButtonCopy = By.xpath('/html/body/div[1]/aside/div/a[1]/p')
        this.collaborationButton = By.xpath('/html/body/div[1]/aside/div/a[2]')
        this.changeLanguageButton = By.xpath('/html/body/div[1]/aside/button')
        this.contentCard = By.className('h-fit space-y-2')
        this.tryTheAppButton = By.xpath('/html/body/header/div/button')
        this.downloadAppButton = By.xpath('/html/body/div[2]/button[1]')
        this.scrollToTopButton = By.xpath('/html/body/div[2]/button[2]')
        this.listTopicsButton = By.xpath('/html/body/div[1]/div[2]/div')
        this.bakingSubTopics = By.xpath('/html/body/div[1]/div[2]/div/button[2]')
        this.forBeginnerTopic = By.xpath('/html/body/div[1]/div[2]/div/button[3]')
        this.oldRecipesTopic = By.xpath('/html/body/div[1]/div[2]/div/button[4]')
        this.vegetarianTopic = By.xpath('/html/body/div[1]/div[2]/div/button[5]')
        this.riceCookerTopic = By.xpath('/html/body/div[1]/div[2]/div/button[6]')
        this.recipeFromCookingTopic = By.xpath('/html/body/div[1]/div[2]/div/button[7]')
        this.card1 = By.xpath('/html/body/div[1]/div[2]/main/div[1]/a[2]/div')
    }  

    async clickCard1() {
        await this.driver.wait(until.elementLocated(this.card1), 10000);
        const card1 = await this.driver.findElement(this.card1);
        await this.driver.wait(until.elementIsVisible(card1), 10000);
        await card1.click();
    }

    async getButtonCssForRecipeFromCookingTopic() {
        const recipeFromCookingTopic = await this.driver.findElement(this.recipeFromCookingTopic);
        return await recipeFromCookingTopic.getCssValue('background-color');
    }

    async clickRecipeFromCookingTopic() {
        const recipeFromCookingTopic = await this.driver.findElement(this.recipeFromCookingTopic);
        await recipeFromCookingTopic.click();
    }
    async getButtonCssForRiceCookerTopic() {
        const riceCookerTopic = await this.driver.findElement(this.riceCookerTopic);
        return await riceCookerTopic.getCssValue('background-color');
    }
    async clickRiceCookerTopic() {
        const riceCookerTopic = await this.driver.findElement(this.riceCookerTopic);
        await riceCookerTopic.click();
    }

    async getButtonCssForVegetarianTopic() {
        const vegetarianTopic = await this.driver.findElement(this.vegetarianTopic);
        return await vegetarianTopic.getCssValue('background-color');
    }

    async clickVegetarianTopic() {
        const vegetarianTopic = await this.driver.findElement(this.vegetarianTopic);
        await vegetarianTopic.click();
    }

    async getButtonCssForOldRecipesTopic() {
        const oldRecipesTopic = await this.driver.findElement(this.oldRecipesTopic);
        return await oldRecipesTopic.getCssValue('background-color');
    }

    async clickOldRecipesTopic() {
        const oldRecipesTopic = await this.driver.findElement(this.oldRecipesTopic);
        await oldRecipesTopic.click();
    }

    async getButtonCssForBeginnerTopics() {
        const forBeginnerTopic = await this.driver.findElement(this.forBeginnerTopic);
        return await forBeginnerTopic.getCssValue('background-color');
    }

    async clickForBeginnerTopic() {
        const forBeginnerTopic = await this.driver.findElement(this.forBeginnerTopic);
        await forBeginnerTopic.click();
    }

    async getButtonCssBakingTopics() {
        const bakingSubTopics = await this.driver.findElement(this.bakingSubTopics);
        return await bakingSubTopics.getCssValue('background-color');
    }

    async clickBakingSubTopics() {
        const bakingSubTopics = await this.driver.findElement(this.bakingSubTopics);
        await bakingSubTopics.click();
    }

    async clickCollaborationButton() {
        const collaborationButton = await this.driver.findElement(this.collaborationButton);
        await collaborationButton.click();
    }

    async isListTopicsButtonDisplayed() {
        const listTopicsButton = await this.driver.findElement(this.listTopicsButton);
        return await listTopicsButton.isDisplayed();
    }

    async isScrollToTopButtonDisplayed() {
        const scrollToTopButton = await this.driver.findElement(this.scrollToTopButton);
        return await scrollToTopButton.isDisplayed();
    }

    async isDownloadAppButtonDisplayed() {
        const downloadAppButton = await this.driver.findElement(this.downloadAppButton);
        return await downloadAppButton.isDisplayed();
    }

    async isTryTheAppButtonDisplayed() {
        const tryTheAppButton = await this.driver.findElement(this.tryTheAppButton);
        return await tryTheAppButton.isDisplayed();
    }

    async isContentCardDisplayed() {
        const contentCard = await this.driver.findElement(this.contentCard);
        return await contentCard.isDisplayed();
    }

    async isChangeLanguageButtonDisplayed() {
        const changeLanguageButton = await this.driver.findElement(this.changeLanguageButton);
        return await changeLanguageButton.isDisplayed();
    }

    async isCollaborationButtonDisplayed() {
        const collaborationButton = await this.driver.findElement(this.collaborationButton);
        return await collaborationButton.isDisplayed();
    }

    async isHomeButtonDisplayed() {
        const homeButton = await this.driver.findElement(this.homeButtonCopy);
        return await homeButton.isDisplayed();
    }

    async isSearchBarDisplayed() {
        const searchBar = await this.driver.findElement(this.searchBar);
        return await searchBar.isDisplayed();
    }

    async isWeyocoLogoDisplayed() {
        const weyocoLogo = await this.driver.findElement(this.weyocoLogo);
        return await weyocoLogo.isDisplayed();
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

module.exports = HomePage;
