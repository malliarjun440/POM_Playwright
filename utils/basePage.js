const config = require("../env/environment.json");
require("dotenv").config();

class basePage {
   
    launchWebsite = async (page) => {
        // let env = config.currentEnvironment;
        console.log(process.env.CURRENTENV);
        let currentEnv = config.environments[process.env.CURRENTENV];

        await page.goto(currentEnv);
    };

    enterDataInTextField = async (page, locator, testData) => {
        try {
            await page.waitForSelector(locator);
           await page.locator(locator).fill(testData); 
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    clickOnButton = async (page, locator) => {
        try {
            await page.waitForSelector(locator);
            await page.locator(locator).click();
        } catch (error) {
            console.log(error);
            throw error;
        }
    };
}
module.exports = basePage;