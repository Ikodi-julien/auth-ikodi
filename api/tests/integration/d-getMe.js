require('dotenv').config();
let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');
const jwt = require('jsonwebtoken');
const path = require('path');
const JWT_SECRET = process.env.JWT_SECRET;

const { jwtService } = require(path.resolve('services/jwt.service'));

/**
 * GET /me
 */
describe('GET ME', () => {

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

  describe('GET /me with access-token - success', () => {
    it('should return user data with expected properties', (done) => {

      
      request
        .get(`/me`)
        .set('Cookie', [ accessToken, refreshToken ])
        .set('Accept', 'application/json')
        .send()
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) return done(err);
          chai.expect(res.body).to.have.property('id');
          chai.expect(res.body).to.have.property('email');
          done();
        });
    });
  });    
  
  describe('GET /me with invalid access-token - fail', () => {
    it('should return status 401 unauthorized', (done) => {
      request
      .get('/me')
      .set('Cookie', [ 'access_token=notgood', refreshToken ])
      .set('Accept', 'application/json')
      .send()
      .expect('Content-Type', /json/)
      .expect(401, done);
    })
  })
          
  describe('GET /me with expired access token but valid refresh token', () => {
    it('should return user data with expected properties', (done) => {
      
      const payload = jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjM1ODUxMTgyLCJleHAiOjE2MzU4NTQ3ODJ9.-rr6pNdTZNJmQEqMePeAr3s1XBnmnDMA-s5R-uJ0voQ', JWT_SECRET);
      const expiredAccessToken = jwtService.getExpiredAccessToken({id: payload.id});
      
      request
        .get(`/me`)
        .set('Cookie', [ `access_token=${expiredAccessToken}`, refreshToken ])
        .set('Accept', 'application/json')
        .send()
        .expect('Content-Type', /json/)
        .expect(200, (err, res) => {
          if (err) return done(err);
          chai.expect(res.body).to.have.property('id');
          chai.expect(res.body).to.have.property('email');
          done();
        });
    });
  })

  
  // /**
  //  * PUT /me
  //  */          
  // describe('PUT /me - success', () => {
  // it('should put another email ', (done) => {
  //   request
  //     .put(`/me`)
  //     .set('Cookie', [ accessToken, refreshToken ])
  //     .set('Accept', 'application/json')
  //     .send({
  //       "email" : "newtest@test.fr",
  //       "password" : "lemdp",
  //       "firstname" : "test",
  //       "lastname" : "delapp"
  //     })
  //     .expect('Content-Type', /json/)
  //     .expect(200, (err, res) => {
  //       if (err) return done(err);
  //       chai.expect(res.body).to.have.property('id');
  //       chai.expect(res.body).to.have.property('email').equal('newtest@test.fr');
  //       chai.expect(res.body).to.have.property('firstname');
  //       chai.expect(res.body).to.have.property('lastname');
  //       done();
  //     });
  //   });
  // }); 
  
//   describe('PUT /me/avatar - success', () => {
//     it('should add an avatar to user and return user data with avatar property ', (done) => {
//       request
//         .put(`/v1/me/avatar`)
//         .set('Cookie', [ accessToken, refreshToken ])
//         .set('Accept', 'application/json')
//         .send({
//           "avatar": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAgAElEQVR4Xuy9B5hd5Xku+q62+94zs2f29D6j0aiMekddgOggQGCwwXaMwQlxnDix7z0557khT05ucnP",
//         })
//         .expect('Content-Type', /json/)
//         .expect(200, (err, res) => {
//           if (err) return done(err);
//           chai.expect(res.body).to.have.property('avatar');
//           done();
//         });
//       });
    }); 
