const { Given, When, Then } = require("@cucumber/cucumber");
const { By, Builder, Browser } = require("selenium-webdriver");
const { expect } = require("chai");

let browser;
Given("Visit Saucedemo login page", async () => {
  browser = await new Builder().forBrowser(Browser.CHROME).build();

  await browser.get("https://www.saucedemo.com");
});

When("I input the username and password", async () => {
  let inputUserName = await browser.findElement(By.name("user-name"));
  let inputPassword = await browser.findElement(By.name("password"));
  await inputUserName.sendKeys("standard_user");
  await inputPassword.sendKeys("secret_sauce");
});

When("I click the login button", async () => {
  let loginButton = await browser.findElement(By.id("login-button"));
  await loginButton.click();
});

Then("I should see the {string} page", async (string) => {
  let title = await browser.getTitle();
  expect(title).to.equal("Swag Labs");
});
