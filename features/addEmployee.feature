Feature: Add Employee

  Scenario: Add new employee
    Given user logs into OrangeHRM
    When user navigates to PIM
    And user clicks add employee
    And user enters employee details
    Then employee should be added successfully