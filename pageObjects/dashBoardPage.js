const {test, expect} = require("@playwright/test");

class dashBoardPage {

    dashboardText = "//h6[text()='Dashboard']";

    verifyDashboardPageVisible = async (page) => {
        expect(await page.locator(this.dashboardText)).toBeVisible();

        expect(await page.locator(this.dashboardText).textContent()).toContain("Dash");

        console.log(await page.locator(this.dashboardText).textContent());
    };
}

module.exports = dashBoardPage;