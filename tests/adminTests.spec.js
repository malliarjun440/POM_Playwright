const {test, expect} = require("@playwright/test");
const LoginPage = require("../pageObjects/loginPage");
const DashboardPage = require("../pageObjects/dashBoardPage");
const AdminPage = require("../pageObjects/adminPage");
const BasePage = require("../utils/basePage.js");
require("dotenv").config();
const PIMPage = require("../pageObjects/pimPage.js");

let pimPage = new PIMPage();
let loginPage = new LoginPage();
let dashBoardPage = new DashboardPage();
let adminpage = new AdminPage();
let basePage = new BasePage();
console.log(process.env.USERNAME);
//Before Each annotation we can use kind of Pre requisite test
test.describe.parallel.only("orange Hrm Add user", () => {

test.beforeEach(async ({ page }) => {
    //navigate or launch website
    await basePage.launchWebsite(page);
    await loginPage.login(page, process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
});

test("Add user from Admin page", async ({page}) => {
    await adminpage.addUser(page);
    await adminpage.createUser(page);
});
test("Add user from PIM 1 page", async ({page}) => {
    await pimPage.navigateAddEmployeePage(page);
    await pimPage.addEmployee(page);
});

test("Add user from PIM 2 page", async ({page}) => {
    await pimPage.navigateAddEmployeePage(page);
    await pimPage.addEmployee(page);
});

test.afterEach(async ({ page }) => {
   await loginPage.logout(page);
   await page.close();
});
});