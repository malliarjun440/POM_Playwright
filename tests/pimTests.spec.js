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
    await loginPage.login(page, process.env.ADMINUSERNAME, process.env.ADMINPASSWORD);
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

//Fresh Project 
//Login to Github
//Create a repository public / private
//cmd prompt
// git init
// .gitigone file whatever files you don't want you can put path in gitignore file
// git add .  // this command use to add your changes in to git 

//if you want to add specic file

// git add "/test/admintest"

// git commit -m "First commit"

// create branch - git branch -M main

//push you changes to main branch --> git push -u origin main