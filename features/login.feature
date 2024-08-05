Feature: Login

    Scenario: Login to the Saucedemo account
      Given Visit Saucedemo login page
      When I input the username and password
      And I click the login button
      Then I should see the "Swag Labs" page