Feature: OrangeHRM User Management

    Background:
        Given the user is logged into OrangeHRM
        And the user is on the User Management page

    @smoke @user 
    Scenario: Add a new user with valid details
        When the user clicks the Add button
        And the user selects the user role
        And the user enters the employee name
        And the user selects the Status
        And the user enters the username
        And the user enters the password
        And the user confirms the password
        And the user clicks the Save button
        Then the new user should be created successfully

    @user @negative
    Scenario: Add user with blank required fields
    When the user clicks the Add button
    And the user clicks the Save button
    Then the Add User required field validation messages should be displayed

    @user @negative @single
    Scenario: Add user with mismatched passwords
        When the user clicks the Add button
        And the user selects the user role
        And the user selects the Status
        And the user enters the employee name
        And the user enters the username
        And the user enters the password
        And the user enters a different confirmation password
        And the user clicks the Save button
        Then the password mismatch validation message should be displayed

    @user @negative 
    Scenario: Add user with an existing username
        When the user clicks the Add button
        And the user selects the user role
        And the user selects the Status
        And the user enters the employee name
        And the user enters an existing username
        And the user enters the password
        And the user confirms the password
        And the user clicks the Save button
        Then the username already exists message should be displayed