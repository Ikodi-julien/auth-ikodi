let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

let accessToken, refreshToken;

/**
 * POST /login 
 */
describe('POST /login with empty email  - fail', () => {
  it('should respond with an error 412 "Precondition Failed', (done) => {
    request
      .post('/login')
      .send({
        "email" : "",
        "password" : "test",
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(412, done)
      });
    });

describe('POST /login with invalid credentials  - fail', () => {
  it('should respond with an error 409', (done) => {
    request
      .post('/login')
      .send({
        "email" : "testeur@testeur.fr",
        "password" : "testeur",
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(409, done)
      });
    });
    

describe('POST /login with invalid email', () => {
  it('should respond with an error 422 "Unprocessable entity"', (done) => {
    request
      .post('/login')
      .send({
        "email" : "test",
        "password" : "lemdp",
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(422, done);
  });
});
    
describe('POST /login with valid email and invalid password', () => {
  it('should respond with an error 403 "Forbidden"', (done) => {
    request
      .post('/login')
      .send({
        "email" : "test@test.fr",
        "password" : "mdp",
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(403, done);
  });
});

describe('POST /login - success', () => {
  it('should respond with status 200 and set cookie access_token and refresh_token', (done) => {
    request
      .post('/login')
      .send({
        "email" : "test@test.fr",
        "password" : "lemdp",
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect('Set-Cookie', /access_token/)
      .expect('Set-Cookie', /refresh_token/)
      .end((err, res) => {
        if (err) return done(err);
        
        [ accessToken, refreshToken ] = res.header['set-cookie'];
        chai.expect(accessToken).to.be.a.string;
        chai.expect(refreshToken).to.be.a.string;
        
        done();
      });
    });
  });
