require('dotenv').config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);

module.exports = {
  login : function() {
    return describe('Login and signup with google', function() {
      it('should fail with status code 412 (précondition failed) if no query code while accessing /google', function(done) {
        request
        .get('/google')
        .send()
        .expect(412, done)
      })
    });
  }
}