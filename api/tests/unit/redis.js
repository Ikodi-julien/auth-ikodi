require('dotenv').config();
const path = require('path');
const redisService = require(path.resolve('services/redis.service.js'));
const redisClient = require(path.resolve('database/redisDB'));
let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

describe('redis service', function() {
  
  describe('redis.setLogin', () => {
    it('Should set "test"="login"', (done) => {
      redisService.setLogin('test');
      
      redisClient.get('test', (err, reply) => {
        if (err) done(err);
        chai.expect(reply).to.be.a.string;
        chai.expect(reply).to.be.equal('login');
      })
      done();
    })
  })

  describe('redis.setLogout', () => {
    it('Should set "test"="logout"', (done) => {
      redisService.setLogout('test');
      
      redisClient.get('test', (err, reply) => {
        if (err) done(err);
        chai.expect(reply).to.be.a.string;
        chai.expect(reply).to.be.equal('logout');
      })
      done();
    })
  })
})