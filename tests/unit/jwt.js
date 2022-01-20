require('dotenv').config();
const path = require('path');
const { jwtService } = require(path.resolve('services/jwt.service'));
let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

describe('jwt service', function() {
  
  describe('jwt.getTokens', () => {
    it('Should return a list of two strings', (done) => {
      const tokens = jwtService.getTokens({id: 1});
      chai.expect(tokens).to.have.length(2);
      chai.expect(tokens[0]).to.be.a.string;
      chai.expect(tokens[1]).to.be.a.string;
      done();
    })
  })
  
  describe('jwt.getExpiredAccessToken', () => {
    it('Should return one string', (done) => {
      const token = jwtService.getExpiredAccessToken({id: 1});
      chai.expect(token).to.be.a.string;
      done();
    })
  })
})
