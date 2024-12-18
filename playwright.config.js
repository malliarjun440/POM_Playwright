// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 5 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 5 : 5,
  //global timeout all test cases 
  globalTimeout : 30 * 60 * 1000,

  //individual test case time out 
  timeout : 10 * 60 * 1000,

  //assertion timeout
  expect: {
    timeout : 15 * 1000
  },

  // reporter: [['html', { open: 'on-failure' }]],
  // reporter:'dot',

  // reporter: 'line',

  reporter: 'html',
  // reporter: [["line"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  //action time timeout -- entering text/click/ navigating between the pages
  actionTimeout :  15 * 1000,
  navigationTimeout : 15 * 1000,
  screenshot : "on",
  video : "retain-on-failure",
  trace : "on",
  headless : false,
   browserName : "chromium"
  },
  
});

