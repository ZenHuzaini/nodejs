const request = require('supertest')
const app = require('../index')

describe("Test using Done to tell it is the end of ececution", () => {
    test('should response with 200', done => {
        request(app)
            .get('/')
            .then((result) => {
                expect(result.statusCode).toBe(200)
                done()
            })
    })

})