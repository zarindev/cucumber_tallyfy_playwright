 Feature: User Authentication tests



  Scenario: Login should be success
    
    When The user navigates to the application
    And The user enters his username as "<username>"
    And The user enters his password as "<password>"
    And The user clicks on the login button
    Then The login should be success

    Examples:
        | username | password |
        | mdzarinjerry@gmail.com  | A@12345b  |