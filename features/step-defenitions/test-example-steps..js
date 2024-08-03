const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

let sum = 0;
Given("Two numbers", function () {
    
});

When("I add {int} and {int}", function (num1, num2) {
    sum = num1 + num2;
});

Then("I should get {int}", function (res) {
  expect(sum).to.equal(res);
});
