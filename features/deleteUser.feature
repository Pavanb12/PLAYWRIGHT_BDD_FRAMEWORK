Feature: OrangeHRM Delete User

    Background:
        Given the user is logged into OrangeHRM
        And the user is on the User Management page

    @smoke @deleteUser
    Scenario: Delete an existing user successfully
        When the user searches for the test user
        And the user selects the test user
        And the user clicks the Delete button
        And the user confirms the deletion
        Then the user should be deleted successfully

    @deleteUser @negative
    Scenario: Cancel deleting a user
        When the user searches for the test user
        And the user selects the test user
        And the user clicks the Delete button
        And the user cancels the deletion
        Then the user should still be displayed