
// /**
//  * GET /me
//  */
// describe('Tests access-token', () => {

//   describe('GET /me with invalid access-token - fail', () => {
//     it('should return status 401 unauthorized', (done) => {
//       request
//       .get('/v1/me')
//       .set('Cookie', [ 'access-token=notgood', refreshToken ])
//       .set('Accept', 'application/json')
//       .send()
//       .expect('Content-Type', /json/)
//       .expect(401, done);
//     })
//   })

//   describe('GET /me with access-token - success', () => {
//     it('should return user data with expected properties', (done) => {
//       request
//         .get(`/v1/me`)
//         .set('Cookie', [ accessToken, refreshToken ])
//         .set('Accept', 'application/json')
//         .send()
//         .expect('Content-Type', /json/)
//         .expect(200, (err, res) => {
//           if (err) return done(err);
//           chai.expect(res.body).to.have.property('id');
//           chai.expect(res.body).to.have.property('email');
//           chai.expect(res.body).to.have.property('nickname');
//           chai.expect(res.body).to.have.property('tags');
//           done();
//         });
//     });
//   });         
          
//   /**
//    * PUT /me
//    */          
//   describe('PUT /me - success', () => {
//   it('should add 3 tags to user and return user data ', (done) => {
//     request
//       .put(`/v1/me`)
//       .set('Cookie', [ accessToken, refreshToken ])
//       .set('Accept', 'application/json')
//       .send({
//         "email": "test@test.fr",
//         "nickname": "test",
//         "tags": [1, 2, 3 ]
//       })
//       .expect('Content-Type', /json/)
//       .expect(200, (err, res) => {
//         if (err) return done(err);
//         chai.expect(res.body).to.have.property('id');
//         chai.expect(res.body).to.have.property('email');
//         chai.expect(res.body).to.have.property('nickname');
//         chai.expect(res.body).to.have.property('tags').with.lengthOf(3);
//         done();
//       });
//     });
//   }); 
  
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
//     }); 
