Feature: Invalid Login

  Scenario: Login with invalid credentials
    Given user is on the login page
    When user enters invalid username "wrongUser" and password "wrongPass"
    And user clicks the login button
    Then error message should be displayed