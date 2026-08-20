Feature: OrangeHRM Edit User

    Background:
        Given the user is logged into OrangeHRM
        And the user is on the User Management page

    @smoke @editUser
    Scenario: Edit an existing user successfully
        When the user searches for the test user
        And the user clicks the Edit button
        And the user updates the username
        And the user updates the user role
        And the user updates the status
        And the user clicks the Save button
        Then the user should be updated successfully

    @editUser @negative
    Scenario: Edit user with blank username
        When the user searches for the test user
        And the user clicks the Edit button
        And the user clears the username
        And the user clicks the Save button
        Then the username required validation message should be displayed