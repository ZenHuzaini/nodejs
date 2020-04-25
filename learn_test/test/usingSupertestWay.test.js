const supertest = require('supertest')
const app = require('../index')

describe('using supertest way', () => {
    test('should be working', () => {
        return supertest(app)
            .get('/')
            .expect(200)
    })

})
