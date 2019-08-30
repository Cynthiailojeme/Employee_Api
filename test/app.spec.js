const supertest = require("supertest");
const assert = require('assert');
const employee = require('../routes/apis/employee');

describe("POST /createnew", function(){
  it("To add the details of an employee", function() {
      let eachEmployee = { 
          image: "image",
          firstname: "firstname",
          lastname: "lastname",
          age: "age",
          email: "email",
          department: "department",
          salary: "salary"
      }
            supertest(employee)
              .post("/createnew")
              .send(eachEmployee)
              .expect(eachEmployee)
              .expect(function(res) {
                  assert.equal(res.body.message, 'Employee account Created');
                  done();
              });
          });
        });

  it("It should return a status code 400 if nothing is sent", function(){
      supertest(employee)
      .post("/createnew")
      .send({})
      .expect(400)
      .expect(function(res) {
          assert.equal(res.body.message, 'No details inputed');
          done();
   });
});


describe("GET /", function() {
    it("It should have a response of all employees", function() {
        supertest(employee)
          .get("/")
          .expect({ 
            image: "image",
            firstname: "firstname",
            lastname: "lastname",
            age: "age",
            email: "email",
            department: "department",
            salary: "salary" })
          .end(function(err, res){
            if (err) done(err);
            done();
          });
    });
  });

  describe("GET /single/:id", function() {
    it("It should have details of a single employee", function() {
        let eachEmployee = { 
            image: "image",
            firstname: "firstname",
            lastname: "lastname",
            age: "age",
            email: "email",
            department: "department",
            salary: "salary"
        }
        supertest(employee)
          .get("/single/:id")
          .expect(eachEmployee)
          .expect(function(res) {
            assert.equal(res.body.message, 'Details of a single employee gotten');
            done();
          });
    });
  });
    
describe("PUT /edit/:id", function(){
    it("To edit the details of an employee", function() {
        let editedDetails = { 
            image: "image",
            firstname: "firstname",
            lastname: "lastname",
            age: "age",
            email: "email",
            department: "department",
            salary: "salary"
        }
              supertest(employee)
                .post("/edit/:id")
                .send(editedDetails)
                .expect(editedDetails)
                .expect(function(res) {
                    assert.equal(res.body.message, 'Employee details edited Successfully');
                    done();
                });
            });
          });

    it("It should return a status code 400 if nothing is sent", function(){
        supertest(employee)
        .post("/edit/:id")
        .send({})
        .expect(400)
        .expect(function(res) {
            assert.equal(res.body.message, 'No details inputed');
            done();
     });
});

describe("DELETE /:id", function() {
    it("It should delete the details of an employee", function() {
        let eachEmployee = { 
            image: "image",
            firstname: "firstname",
            lastname: "lastname",
            age: "age",
            email: "email",
            department: "department",
            salary: "salary"
        }
        supertest(employee)
          .get("/:id")
          .expect(eachEmployee)
          .expect(function(res) {
            assert.equal(res.body.message, 'Employee details Deleted Successfully');
            done();
          });
    });
  });
    