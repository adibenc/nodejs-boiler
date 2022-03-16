const User = require("../models/User");
const {BaseResourceController} = require("./BaseResourceController");

// sequelize resource
class UserController extends BaseResourceController {
    constructor(){
        super()
        this.setModel(User)
    }
}

module.exports = {
    UserController,
    Controller: UserController,
};