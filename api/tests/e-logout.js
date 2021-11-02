let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');


const deleteUser = () => {
  describe('deleteUser', () => {
    it('should delete a user', (done) => {
      request
      .post('/login')
      .send({
        "email" : "test@test.fr",
        "password" : "lemdp",
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        // console.log('delete', res.body.id);
        request
        .delete(`/test/${res.body.id}`)
        .send()
        .expect(200, done)
      })
    })
  })
};

describe('LOGOUT and cleaning tests', () => {
  describe('DELETE /test/:id before /login with JWT', () => {
    it('before "DELETE /me" should delete all users except those inserted with create.sql', (done) => {
      request
      .get('/count')
      .send()
      .expect(200, (err, res) => {
        // console.log('count', res.body.count);
        describe('deleteUser loop', () => {
          if (res.body.count > 2){
            for (let i=3; i <= res.body.count; i++) {
              deleteUser()
            }
          }
        });

        done();
      })
    })
  });
  
  
          
  describe('GET /logout with tokens', () => {
    let accessToken, refreshToken;
    
    describe('First login', () => {
      it('should login', (done) => {
        request
        .post('/login')
        .send({
          "email" : "test@test.fr",
          "password" : "lemdp",
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
        
  describe('Finally GET /me but after logout with same tokens', () => {
    it('should return status 401', (done) => {
      // console.log('finally', accessToken);
      request
        .get(`/me`)
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
    
            
//   /**
//    * DELETE /me
//    */ 
//   describe('DELETE /me with access-token - success', () => {
//     it('should delete user account', (done) => {
//       request
//         .delete('/v1/me')
//         .set('Cookie', [ accessToken, refreshToken ])
//         .set('Accept', 'application/json')
//         .send()
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   }); 
// });

