  
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../src/index')

chai.should()

chai.use(chaiHttp)

describe('Tasks API', () => {

    //Test the GET route
    describe('GET all tasks', () => {
        it("It should get all tasks", (done) => {
            chai.request(server)
            .get("/anytasks")
            .end((err, response) => {
                console.log(response.body)
                response.should.have.status(200);
                response.body.should.be.a('array');
                console.log("dd")
                done();
            })
        }).timeout(5000);
    })
  
  
  
  
      describe('authentication', () => {
        it("Check if request fails without authentication", (done) => {
            chai.request(server)
            .get("/tasks")
            //.set('content-type', 'application/x-www-form-urlencoded')
            //.send({email: 'test',password: '1234567'})
            .end((err, response) => {

                //console.log(response.body)
                response.should.have.status(401);
                //response.body.should.be.a('array');
                //console.log("dd")
                done();
            })
        }).timeout(5000);
    })

    describe('authentication', () => {
        it("Check if request passes with authentication", (done) => {
            chai.request(server)
            .get("/tasks")
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdjMmVmODc0OTAxMTYzNjRkNWFmOTgiLCJpYXQiOjE2MTg3NTE0MDd9.iznbEk5K4M7lyh75zF8x8QBtJJuvSB09Yu6ulbHWEgU')
            //.send({email: 'test',password: '1234567'})
            .end((err, response) => {

                //console.log(response.body)
                response.should.have.status(200);
                //response.body.should.be.a('array');
                //console.log("dd")
                done();
            })
        }).timeout(5000);
    })
  
  
    describe('GET wrong API anytask', () => {
        it("It should NOT get all tasks", (done) => {
            chai.request(server)
            .get("/anytask")
            .end((err, response) => {
                response.should.have.status(404);
                done();
            })
        })
    })
    
})
