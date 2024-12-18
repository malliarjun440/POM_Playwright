const {test, expect} = require("@playwright/test");
const BasePage = require("../utils/basePage.js");
const AdminPageTestData = require("../testData/adminPageTestData.js");

let basePage = new BasePage();
let adminPageTestData = new AdminPageTestData();

class adminPage {

    //Locator
    adminPageLocator = "//a//span[text()='Admin']";
    addButton = "//button[text()=' Add ']";

    addUserText = "//h6[text()='Add User']";

    userRoleDropdown = "//label[text()='User Role']//..//following-sibling::div//div[@class='oxd-select-text-input']";

    userDropdownOptions = "//div[@role='option']//span";

    employeeName = "//label[text()='Employee Name']//..//following-sibling::div//input";

    statusDropdown = "//label[text()='Status']//..//following-sibling::div//div[@class='oxd-select-text-input']";

    userName = "//label[text()='Username']//..//following-sibling::div//input";

    password =  "//label[text()='Password']//..//following-sibling::div//input";

    confirmPassword = "//label[text()='Confirm Password']//..//following-sibling::div//input";

    saveButton = "//button[@type='submit']";
    //Methods

    addUser = async (page) => {
        try {
        await page.locator(this.adminPageLocator).click();
        await page.locator(this.addButton).click();
        expect(await page.locator(this.addUserText)).toBeVisible(); 
        } catch (error) {
           console.log(error); 
        }
       
    };

    createUser = async (page) => {
        // try {
           let userRoledata = adminPageTestData.userRoleData[Math.floor(Math.random() * adminPageTestData.userRoleData.length)];
            await this.selectDropdown(page, this.userRoleDropdown, userRoledata);

            //Enter Employee name 
            await basePage.enterDataInTextField(page, this.employeeName, "Orange  Test");
            await page.waitForTimeout(3000);
            await this.selectSuggestion(page, "Orange  Test");

            let statusData = adminPageTestData.statusData[Math.floor(Math.random() * adminPageTestData.statusData.length)];
            await this.selectDropdown(page, this.statusDropdown, statusData);

             //Enter User name 
             await basePage.enterDataInTextField(page, this.userName, "MkarYin");

            //Enter password name 
             await basePage.enterDataInTextField(page, this.password, "test@123");

            //Enter confirm password name 
             await basePage.enterDataInTextField(page, this.confirmPassword, "test@123");

             //Click on Save Button
             await basePage.clickOnButton(page, this.saveButton);
            // await page.pause();

        // } catch (error) {
        //     console.log(error); 
        //     throw error;
        // }
    };


    selectDropdown = async(page, locator, testData) => {

        let dropdownValues = [];
        //click on the dropdown
        await basePage.clickOnButton(page, locator);

        //find the list of options
        const dropDownOptionsLocator = await page.locator(this.userDropdownOptions);

        //Count of the Options
        const optionsCount = await dropDownOptionsLocator.count();
        console.log(optionsCount);
        for (let i = 0; i < optionsCount ; i++) {      
            let dropdownText = await dropDownOptionsLocator.nth(i).textContent();
            console.log(dropdownText);
            dropdownValues.push(dropdownText);
            if(dropdownText === testData){
               await dropDownOptionsLocator.nth(i).click();
               break;
            }
        }
        console.log(dropdownValues);
    };

    selectSuggestion = async(page, testData) => {
        const dropDownOptionsLocator = await page.locator(this.userDropdownOptions);
        const optionsCount = await dropDownOptionsLocator.count();
        console.log(optionsCount);
        for (let index = 0; index < optionsCount ; index++) {      
            let dropdownText = await dropDownOptionsLocator.nth(index).textContent();
            console.log(dropdownText);
            if(dropdownText === testData){
               await dropDownOptionsLocator.nth(index).click();
               break;
            }
        }
    };
}

module.exports = adminPage;