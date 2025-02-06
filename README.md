# First Setup Web Automation Using Selenium!

Selenium is a popular open-source testing framework used for automating web browsers. It allows you to write scripts that can interact with web elements, simulate user actions (like clicking, typing, scrolling), and verify expected behaviors across different browsers.

Selenium is widely used in:
- Automated testing of web applications
- Web scraping and data extraction
- Browser automation tasks

## Prerequisites

Before running the tests, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A code editor (VS Code recommended)

## Installation

1. Clone this repository:
```bash
git clone https://github.com/rifkykurniawan/Selenium-Template.git
cd Selenium-Template
```

2. Install the dependencies:
```bash
npm install
```
3. Install the Selenium Webdriver:
```bash
npm install selenium-webdriver

```
4. Install the Mocha Framework:
```bash
npm install mocha

```
5. Install the Chrome Driver:
```bash
npm install chromedriver

```

## Project Structure

```
Selenium-Template/
├── src/Pages         # Locators and Page Objects
├── tests/            # Test files
```
## Running Tests

There are several ways to run the tests:

### Run General Test (You can setup it on package.json file)
```bash
npm test
```

### Run Specific File
```bash
npx mocha tests/TestCases.js
```
## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
