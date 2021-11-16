let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

module.exports = {
  signup: () => {
    describe('POST /signup with correct input', () => {
  
      it('should respond with status 200 and json with property "id"', (done) => {
        request
          .post('/signup')
          .send({
            "email" : "test@test.fr",
            "password" : "lemdp",
            "firstname" : "test",
            "lastname" : "delapp"
          })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
    });
  },
}