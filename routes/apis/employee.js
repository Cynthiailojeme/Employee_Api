const express = require('express');
const router = express.Router();
const Employee = require('../../models/Employee');

// Create a new employee data
router.post('/createnew', (req, res, next) => {
    const image = req.body.image;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const email = req.body.email;
    const department = req.body.department;
    const salary = req.body.salary;
    newEmployee = new Employee({
        image: image,
        firstname: firstname,
        lastname: lastname,
        age: age,
        email: email,
        department: department,
        salary: salary
    });
    newEmployee.save()
    .then(employee => {
        res.json(employee); 
    })
    .catch(err => console.log(err));
})

// Get all the list of all the employees
router.get('/', (req, res, next) => {
    Employee.find()
        .then((employees) => {
            res.json(employees);
        })
        .catch(err => console.log(err))
});

// Get all the details of one employee
router.get('/single/:id', (req, res, next) => {
    //Grab the id of the employee
    let id = req.params.id;
    Employee.findById(id)
        .then((employee) => {
            res.json(employee);
        })
        .catch(err => console.log(err))
});


// Edit an employee details
router.put('/edit/:id', (req, res, next) => {
    //Grab the id of the employee
    let id = req.params.id;
    // find the employee by id from the databasse
        Employee.findById(id)
        .then(employee => {
            employee.image = req.body.image;
            employee.firstname = req.body.firstname;
            employee.lastname = req.body.lastname;
            employee.age = req.body.age;
            employee.email = req.body.email;
            employee.department = req.body.department;
            employee.salary = req.body.salary;
            employee.save()
            .then(employee =>{
                res.send({message: 'This employee details has been updated succesfully',
                status: 'success',
                employee: employee})
            })
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
        
    });

// Delete the details of a single employee
router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Employee.findById(id)
    .then(employee => {
        employee.delete()
        .then(employee =>{
            res.send({message: 'This employee data has been deleted succesfully',
            status: 'success',
            employee: employee})

        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
})


module.exports = router;