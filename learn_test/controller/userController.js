const UserService = require('../services/userService')

class UserController {
    constructor(dependencies) { //do injection to dependencies
        this.UserService = UserService//dependencies.UserService

        this.adduser = this.adduser
        this.seeUser = this.seeUser
        this.seeAllUser = this.seeAllUser
        this.getusers = this.getusers

        console.log('this is ' + this)
    }

    async getusers(req, res) {
        try {
            const user = await UserService.prototype.seeAllUser() //this.UserService.prototype. <= cannot use
            console.log(user)
            res.send(user)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    async addUser(req, res) {
        try {
            const user = req.query.name;
            let saveName = await UserService.prototype.addUser({ name: user })
            console.log(saveName)
            res.send(saveName)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }

    async seeAllUser(req, res) {
        try {
            const user = await UserService.prototype.seeAllUser() //this.UserService.prototype. <= cannot use
            console.log(user)
            res.send(user)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = UserController