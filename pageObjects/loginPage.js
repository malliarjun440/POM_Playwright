const BasePage = require("../utils/basePage.js");

let basePage = new BasePage();

class loginPage {

        username = "//input[@name='username']";
        password = "//input[@name='password']";
        loginButton = "//button[@type='submit']";

        userProfile = "//ul//li//span[@class='oxd-userdropdown-tab']";
        logoutBtn = "//a[text()='Logout']";

    login = async (page, userName, Password) => {
        await basePage.enterDataInTextField(page, this.username, userName);
        await basePage.enterDataInTextField(page, this.password, Password);
        await basePage.clickOnButton(page, this.loginButton);
        // await page.locator(this.loginButton).click();
    };

    logout = async (page) => {
        await basePage.clickOnButton(page, this.userProfile);
        await basePage.clickOnButton(page, this.logoutBtn);
        // await page.locator(this.userProfile).click();
        // await page.locator(this.logoutBtn).click();
    }
}

module.exports=loginPage;