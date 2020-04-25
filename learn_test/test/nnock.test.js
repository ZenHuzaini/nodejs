const nock = require('nock')
const chai = require('chai')

describe.only('something', () => {
    test('should return expected', () => {
        nock('http://example.com')
            .get('/users')
            .query(true)
            .reply(200, { results: [{ id: 'pgte' }] })
    })

})
