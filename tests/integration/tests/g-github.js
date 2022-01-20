require('dotenv').config();
let request = require('supertest');
request = request(`http://localhost:${process.env.PORT}`);

module.exports = {
  redirect : function() {
    return describe('redirect to github login page', function() {
      it('should redirect to github login page', function(done) {
        request
        .get('/github/authredirect')
        .send()
        .expect('Content-type', /html/)
        .expect(200, done)
      })
    });
  }
}