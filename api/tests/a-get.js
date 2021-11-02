let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

/**
 * GET /
 */
describe('Endpoints accessible without jwt', () => {
  
  describe('GET /', () => {
    it('should return status 200 and data json', (done) => {
      request
      .get('/')
      .send()
      .expect('Content-Type', /json/)
      .expect(200, done);
    })
  })
  
  describe('GET /doc', () => {
    it('should return status 200 and html file', (done) => {
      request
      .get('/doc')
      .send()
      .expect('Content-Type', /html/)
      .expect(200, done);
    })
  })
})

