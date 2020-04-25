const supertest = require('supertest')
const app = require('../index')

//if you are using promise you dont need write done in the end
//but you must return, or your test will stuck
describe('it must be working', () => {
    test('should be working', () => {
        return supertest(app)
            .get('/')
            .then((response) => {
                expect(response.statusCode).toBe(200)
            })
    })
})