Feature: OrangeHRM Login Feature

  Scenario: Successful login with valid credentials
    Given User launches OrangeHRM application
    When User enters valid username and password
    Then User should see the dashboard
    And User logs out

  