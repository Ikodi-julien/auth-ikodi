require('dotenv').config();
let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

/**
 * GET /me
 */
describe('PUT ME', () => {

  describe('Log test user to get jwt', () => {
    it('Should log a test user to get access and refresh-tokens', (done) => {
      request.post('/login')
      .send({
        "email" : "test@test.fr",
        "password" : "lemdp",
      })
      .expect(200, (err, res) => {
        if (err) return done(err);
        
        [ accessToken, refreshToken ] = res.header['set-cookie'];
        chai.expect(accessToken).to.be.a.string;
        chai.expect(refreshToken).to.be.a.string;
        
        done();
      })
    })
  });

  /**
   * PUT /me
   */          
  describe('PUT /me - success', () => {
  it('should put another email ', (done) => {
    request
      .put(`/me`)
      .set('Cookie', [ accessToken, refreshToken ])
      .set('Accept', 'application/json')
      .send({
        "email" : "newtest@test.fr",
        "password" : "lemdp",
        "firstname" : "test",
        "lastname" : "delapp"
      })
      .expect('Content-Type', /json/)
      .expect(200, (err, res) => {
        if (err) return done(err);
        chai.expect(res.body).to.have.property('id');
        chai.expect(res.body).to.have.property('email').equal('newtest@test.fr');
        chai.expect(res.body).to.have.property('firstname');
        chai.expect(res.body).to.have.property('lastname');
        done();
      });
    });
  }); 
  
  describe('PUT /me/password - success', () => {
    it('should set new password for user', (done) => {
      request
        .put(`/me/password`)
        .set('Cookie', [ accessToken, refreshToken ])
        .set('Accept', 'application/json')
        .send({
          "password" : "lemdp",
          "newPassword" : "lenouveaumdp",
        })
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) return done(err);
          done();
        });
    });
  });
  
  describe('Try login with old password', () => {
    it('should respond with status 403', (done) => {
      request
        .post('/login')
        .send({
          "email" : "newtest@test.fr",
          "password" : "lemdp",
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(403, done);
      });
  });
  
  describe('Try login with new password', () => {
    it('should respond with status 200', (done) => {
      request
        .post('/login')
        .send({
          "email" : "newtest@test.fr",
          "password" : "lenouveaumdp",
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
      });
  });
});
