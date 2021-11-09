let request = require('supertest');
request = request('http://localhost:5050');

describe('LOGOUT', () => {
          
  describe('GET /logout with tokens - success', () => {
    let accessToken, refreshToken;
    
    describe('First login', () => {
      it('should login', (done) => {
        request
        .post('/login')
        .send({
          "email" : "newtest@test.fr",
          "password" : "lenouveaumdp",
        })
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err) return done(err);
          
          [ accessToken, refreshToken ] = res.header['set-cookie'];
          done();
        });      
    })
  });
    
  describe('Then logout', () => {
    it('should redirect to "/"', (done) => {
    // console.log('first', accessToken);
    request
      .post(`/logout`)
      .set('Cookie', [ accessToken, refreshToken ])
      .set('Accept', 'application/json')
      .send()
      .expect(302)
      .expect('Location', '/')
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
    });
  });
        
  describe('Finally try GET /me with same tokens', () => {
    it('should return status 401', (done) => {
      // console.log('finally', accessToken);
      request
        .get(`/me/credentials`)
        .set('Cookie', [ accessToken, refreshToken ])
        .set('Accept', 'application/json')
        .send()
        .expect('Content-Type', /json/)
        .expect(401, (err, res) => {
          if (err) return done(err);
          done();
          });
      });
    })
  })
});
    
            
  /**
   * DELETE /me
   */ 
  describe('DELETE /me/credentials', function() {
    
    let accessToken, refreshToken;
    
    describe('First login', function() {
      it('should login', (done) => {
        request
        .post('/login')
        .send({
          "email" : "newtest@test.fr",
          "password" : "lenouveaumdp",
        })
        .set('Accept', 'application/json')
        .end((err, res) => {
          if (err) return done(err);
          
          [ accessToken, refreshToken ] = res.header['set-cookie'];
          
          describe('Then DELETE /me with access-token - success', function() {
            it('should delete user account and return status 200', (done) => {
              request
                .delete('/me/credentials')
                .set('Cookie', [ accessToken, refreshToken ])
                .set('Accept', 'application/json')
                .send()
                .expect('Content-Type', /json/)
                .expect(200, done);
            });
          }); 
          
          done();
        });      
      })
    });
  })
