const {test, expect} = require("@playwright/test");
const LoginPage = require("../pageObjects/loginPage");
const BasePage = require("../utils/basePage.js");
const PIMPage = require("../pageObjects/pimPage.js");

let loginPage = new LoginPage();
let basePage = new BasePage();
let pimPage = new PIMPage();
test.describe.serial.only("orange Hrm PIM Page", () => {
//Before Each annotation we can use kind of Pre requisite test
test.beforeEach(async ({ page }) => {
    //navigate or launch website
    await basePage.launchWebsite(page);
    await loginPage.login(page, "Admin", "admin123");
});

test("Add user from PIM page", async ({page}) => {
    await pimPage.navigateAddEmployeePage(page);
    await pimPage.addEmployee(page);
});

test.afterEach(async ({ page }) => {
   await loginPage.logout(page);
   await page.close();
});
});