const BaseService = require('../services/Constants')
const UserModel = require('../database/models/UserSchema')

module.exports = class UserController {
    constructor() {
        this.userList = this.userList //this.userList.bind(this)
        this.myData = this.myData.bind(this)
        this.sendMail = this.sendMail.bind(this)
        this.createUser = this.createUser

        this.BaseService = new BaseService(UserModel)
    }

    async userList(req, res) {
        console.log('user is sccessed')
        try {
            const users = this.BaseService.getAllUser()
            res.status.send(users)
        } catch (error) {
            res.send(error)
        }
    }

    async myData(req, res) {
        try {
            const user = this.BaseService.getUser(req.query.id)
            if (!user) {
                return res.send({ message: 'no User' })
            }
            res.status.send(user)
        } catch (error) {
            res.send(error)
        }
    }

    async createUser(req, res) {
        try {
            const data = { name: 'zen' }
            const newUser = this.BaseService.createUser(data)
            if (!newUser) {
                return res.send(newUser)
            }
            return res.send(newUser)
        } catch (error) {
            res.send(error)
        }
    }

    async sendMail(req, res) {

    }


}

//UserController

