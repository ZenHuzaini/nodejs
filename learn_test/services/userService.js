const user = require('../database/User')

class userService {
    constructor(modelDependencies) {
        this.model = new user() //this.modelDependencies
    }

    async addUser(data) {
        const newdata = new user(data) //this.model(data) <= using this not working
        await newdata.save()
        return newdata
    }

    async seeUser(id) {
        const user = await this.model.findById("5e6fa6166e8f992f8d1f92d4")
        return user
    }

    async seeAllUser() {
        const alluser = await user.find()
        console.log(alluser)
        return alluser
    }
}

module.exports = userService