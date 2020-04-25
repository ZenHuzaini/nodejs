const supertest = require('supertest')
const app = require('../index')

describe('this is using async await', () => {
    test('should be passed.. ', async () => {
        const response = await supertest(app).get('/')
        expect(response.statusCode).toBe(200)
    })
})