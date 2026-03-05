Feature: Delete Employee

  Scenario: Delete an employee
    Given user logs into OrangeHRM
    When user navigates to PIM
    And user deletes an employee
    Then employee should be removed