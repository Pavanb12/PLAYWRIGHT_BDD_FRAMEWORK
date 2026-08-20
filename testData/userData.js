const userData = {
    validUser: {
        role: 'ESS',
        employeeName: 'Ranga  Akunuri',
        status: 'enabled',
        username: `testuser_${Date.now()}`,
        password: 'Test@12345',
        confirmPassword: 'Different@12345'
    },

    existingUser: {
        role: 'ESS',
        employeeName: 'John Doe',
        status: 'enabled',
        username: 'Admin',
        password: 'Admin@123'
    },

    mismatchPasswordUser: {
        role: 'ESS',
        employeeName: 'John Doe',
        username: `testuser_${Date.now()}`,
        password: 'Test@12345',
        confirmPassword: 'Different@12345'
    },
    editUser: {

        updatedUsername: "updateduser123",

        role: "Admin",

        status: "Disabled"
    }

};

module.exports = userData;