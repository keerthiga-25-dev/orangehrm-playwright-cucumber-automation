Feature: Search Employee

  Scenario: Search employee by name
    Given user logs into OrangeHRM
    When user navigates to PIM
    And user searches for employee "John"
    Then employee results should be displayed