Feature: OrangeHRM Authentication

    Background:
        Given the user is on the OrangeHRM login page

    @smoke @auth
    Scenario: Login with valid credentials
        When the user enters a valid username
        And the user enters a valid password
        And the user clicks the Login button
        Then the user should be redirected to the Dashboard
        And the Dashboard should be displayed

    @auth @negative
    Scenario: Login with invalid username
        When the user enters an invalid username
        And the user enters a valid password
        And the user clicks the Login button
        Then the login error message should be displayed

    @auth @negative
    Scenario: Login with invalid password
        When the user enters a valid username
        And the user enters an invalid password
        And the user clicks the Login button
        Then the login error message should be displayed

    @auth @validation
    Scenario: Login with blank username
        When the user leaves the username field blank
        And the user enters a valid password
        And the user clicks the Login button
        Then the username validation message should be displayed

    @auth @validation
    Scenario: Login with blank password
        When the user enters a valid username
        And the user leaves the password field blank
        And the user clicks the Login button
        Then the password validation message should be displayed

    @auth @validation
    Scenario: Login with blank username and password
        When the user leaves the username field blank
        And the user leaves the password field blank
        And the user clicks the Login button
        Then the required field validation messages should be displayed

    @auth @ui
    Scenario: Password should be masked
        When the user enters a password
        Then the password should be displayed as masked characters

    @smoke @auth
    Scenario: Logout successfully
        Given the user is logged into OrangeHRM
        When the user logs out
        Then the user should be redirected to the Login page