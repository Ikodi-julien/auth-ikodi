let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');
const success = require('./service/success');

let newId;
/**
 * POST /signup
 */
describe('SIGNUP', () => {
  
  success.signup();
  
  describe('POST /signup with empty input', () => {
    it('should respond with an error 412 "Precondition Failed"', (done) => {
      request
        .post('/signup')
        .send({
          "email" : "",
          "password" : "",
          "firstname" : "",
          "lastname" : ""
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(412, done);
    });
  });
  
  describe('POST /signup with invalid email', () => {
    it('should respond with an error 422 "Unprocessable entity"', (done) => {
      request
        .post('/signup')
        .send({
          "email" : "test",
          "password" : "lemdp",
          "firstname" : "test",
          "lastname" : "delapp"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(422, done);
    });
  });
  
  describe('POST /signup with already known credentials', () => {
    it('should respond with status 303 "See other" ', (done) => {
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
        .expect(303, done);
    });
  });
  
})

