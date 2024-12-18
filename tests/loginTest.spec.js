const {test, expect} = require("@playwright/test");
const LoginPage = require("../pageObjects/loginPage");
const DashboardPage = require("../pageObjects/dashBoardPage");
const AdminPage = require("../pageObjects/adminPage");
const BasePage = require("../utils/basePage.js");

let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();
let adminpage = new AdminPage();
let basePage = new BasePage();

test.describe.serial.only("orange Hrm Login test", () => {
//Before Each annotation we can use kind of Pre requisite test
test.beforeEach(async ({ page }) => {
    //navigate or launch website
    await basePage.launchWebsite(page);
});

test("Login and Logout Tests", async ({page}) => {
   
    // await page.waitForTimeout(3000);

    await loginPage.login(page, "Admin1", "admin123");

    await dashBoardPage.verifyDashboardPageVisible(page);

    await loginPage.logout(page);
    
});

test("Create New User", async ({page}) => {
   
    // await page.waitForTimeout(3000);

    await loginPage.login(page, "Admin", "admin123");

    await adminpage.addUser(page);

    await loginPage.logout(page);
    
});

test.afterEach(async ({ page }) => {
   await page.close();
});

});