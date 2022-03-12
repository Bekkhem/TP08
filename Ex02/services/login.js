const { readUsers } = require("../db/db")

const login = async(email, password) => {
    const users = await readUsers();
    var status = 1;

    if (!email || !password) {
        let sendEror = JSON.parse('{ "status": "false", "message": "Enter an email or password" }');
        return sendEror;
    } else {
        //chack if username or email and password matched
        for (user in users) {
            if ((users[user].email == email || users[user].username == email) && users[user].password == password) {
                status = 0;
                return { "status": "true", "message": "Log in successfull", "data": users[user] };
            }
        }
        //check if email or username is not existed or wrong password
        if (status == 1) {
            let sendIncor = JSON.parse('{  "status": "false", "message": "Email or Password is incorrect" }');
            return sendIncor;
        }
    }
}

module.exports = {
    login,
}