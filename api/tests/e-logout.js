let request = require('supertest');
request = request('http://localhost:5050');
const chai = require('chai');

let accessToken, refreshToken;

const deleteUser = () => {
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
};

describe('DELETE /test/:id before /login with JWT', () => {
  it('should delete all users except those inserted with create.sql', (done) => {
    request
    .get('/count')
    .send()
    .expect(200, (err, res) => {
      
      describe('deleteUser', () => {
        // console.log('count', res.body.count);
        
        if (res.body.count > 2){
          for (let i=3; i <= res.body.count; i++) {
            deleteUser()
          }
        }
      })

      done();
    })
  })
})

//   /**
//    * POST /logout
//    */ 
//   describe('POST /logout with access-token - success', () => {
//     it('should logout the user', (done) => {
//       request
//         .post('/v1/logout')
//         .set('Cookie', [ accessToken, refreshToken ])
//         .set('Accept', 'application/json')
//         .send()
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
//   });          
            
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

// /**
//  * Test login after deleted user account
//  */ 
// describe('POST /login - fail after user deleted', () => {
//   it('should send status 409', (done) => {
//     request
//       .post('/v1/login')
//       .send({
//         "email" : "test@test.fr",
//         "password" : "test",
//       })
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(409, done)
//   });
// });
