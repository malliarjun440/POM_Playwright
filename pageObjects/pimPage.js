const { test, expect } = require("@playwright/test");
const BasePage = require("../utils/basePage.js");
const Chance = require("chance");

let basePage = new BasePage();
let chance = new Chance();

class pimPage {

    creatLoginDetailsToggleButton = "//*[@class='oxd-switch-input oxd-switch-input--active --label-right']";

    userName = "//label[text()='Username']//parent::div//following-sibling::div//input";

    password = "//label[text()='Password']//..//following-sibling::div//input";

    confirmPassword = "//label[text()='Confirm Password']//..//following-sibling::div//input";

    
    saveButton = "//button[@type='submit']";

    navigateAddEmployeePage = async (page) => {
        await page.getByRole('link', { name: 'PIM' }).click();
        await page.getByRole('link', { name: 'Add Employee' }).click();
    };

    addEmployee = async (page) => {
        await page.getByPlaceholder('First Name').fill(chance.first());
        await page.getByPlaceholder('Middle Name').fill(chance.name({ middle: true }));
        await page.getByPlaceholder('Last Name').fill(chance.name({ prefix: true }));
        await page.waitForTimeout(3000);
        await basePage.clickOnButton(page, this.creatLoginDetailsToggleButton);

        console.log(chance.email());
        console.log(chance.phone({ country: 'uk', mobile: true }));
        console.log(chance.company());
        console.log(chance.postcode());
        console.log(chance.city());

        console.log(chance.birthday());
        //Enter User name 
        await basePage.enterDataInTextField(page, this.userName, "MkarYin");

        //Enter password name 
        await basePage.enterDataInTextField(page, this.password, "test@123");

        //Enter confirm password name 
        await basePage.enterDataInTextField(page, this.confirmPassword, "test@123");

        //Click on Save Button
        await basePage.clickOnButton(page, this.saveButton);
    }
}

module.exports = pimPage;