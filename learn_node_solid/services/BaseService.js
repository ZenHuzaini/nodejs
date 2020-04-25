const userModel = require('../database/models/UserSchema')
const Response = require('./Constants')

class BaseService {
    constructor(modelDependencies) {
        this.model = modelDependencies //will change this to dependencies
        this.getUser = this.getUser.bind(this)
        this.getAllUser = this.getAllUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.createUser = this.createUser.bind(this)
    }

    async getUser(id) {
        try {
            const user = await this.model.findById(id)
            if (!user) {
                Response.status = '0'
                Response.message = user

                return Response
            }

            Response.status = 'ok'
            Response.message = user
            return Response
        } catch (error) {
            Response.status = '0'
            Response.message = user

            return Response
        }
    }

    async getAllUser() {
        try {
            const alluser = await this.model.find()
            return alluser ? alluser : 'No user'
        } catch (error) {
            return error
        }
    }

    async deleteUser(id) {

    }

    async createUser(data) {
        const newUser = new this.model(data)
        try {
            await newUser.save()
            return newUser
        } catch (error) {
            return error
        }
    }

    async updateUser(id) {

    }
}

module.exports = BaseService