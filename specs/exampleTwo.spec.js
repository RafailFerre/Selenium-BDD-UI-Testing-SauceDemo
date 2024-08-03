const { By, Builder, Browser } = require("selenium-webdriver");
const { expect } = require("chai");

describe("EXAMPLE", () => {
  let browser;
  it("Verify Web Form", async () => {
    browser = await new Builder().forBrowser(Browser.CHROME).build();

    await browser.get("https://www.selenium.dev/selenium/web/web-form.html");

    let title = await browser.getTitle();
    
    expect(title).to.equal("Web form");

    await browser.manage().setTimeouts({ implicit: 500 });

    let textBox = await browser.findElement(By.name("my-text"));
    let submitButton = await browser.findElement(By.css("button"));

    await textBox.sendKeys("Selenium");
    await submitButton.click();

    let message = await browser.findElement(By.id("message"));
    let value = await message.getText();
    
    expect(value).to.equal("Received!");

    await browser.quit();
  });
});
