  
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
        })
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