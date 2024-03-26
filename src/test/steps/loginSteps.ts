import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";

let browser: Browser;
let page: Page;



       
         When('The user navigates to the application', async function () {
          browser = await chromium.launch({headless: false});
          page = await browser.newPage();
          await page.goto("https://account.tallyfy.com", {timeout: 120000});
          await page.waitForURL("https://account.tallyfy.com");
         });
       

       
         When('The user enters his username as {string}', async function (username) {
          await page.getByPlaceholder('Your email').fill(username);
         });
       

       
         When('The user enters his password as {string}', async function (password) {
          await page.getByPlaceholder('Password').fill(password);
          
         });
       

       
         When('The user clicks on the login button', async function () {
          await page.click('button[type="submit"]');

         });
       

       
         Then('The login should be success', async function () {
          await page.waitForURL("https://go.tallyfy.com/9710244f43f053c2618dd09613e3c56d/dashboard");
          await expect(page).toHaveTitle(/Tallyfy/);
          await browser.close();
         });
    