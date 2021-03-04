const inquirer = require('inquirer');
const fs = require('fs');
const connection = require('./server.js')
const showAllDepartments = require('./server.js')
const showAllRoles = require('./server.js')


const promptAllOptions = () => {
    return inquirer.prompt([
        {
        type: 'list',
        name: 'allOptions',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
        {
        name: 'viewDepartments',
        message: showAllDepartments, ///need to input function here
        when: (data) => data.allOptions === 'View All Departments'
        },
        {
        name: 'viewRoles',
        message: showAllRoles, ///need to input function here
        when: (data) => data.allOptions === 'View All Roles'
        },
        {
        name: 'viewEmployees',
        message: 'Testing to view all employees', ///need to input function here
        when: (data) => data.allOptions === 'View All Employees'
        },
        {
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the department you would like to add?', 
        when: (data) => data.allOptions === 'Add a Department' ///need to add new dpt to database
        },
        {
        type: 'input',
        name: 'roleName',
        message: 'What is the name for the role?',
        when: (data) => data.allOptions === 'Add a Role'
        },
        {
        type: 'input',
        name: 'roleSalary',
        message: 'What is the salary for the role?',
        when: (data) => data.allOptions === 'Add a Role'
        },
        {
        type: 'input',
        name: 'roleDepartment',
        message: 'What is the department for the role?',
        when: (data) => data.allOptions === 'Add a Role' ///need to add role info to the database
        },
        {
        type: 'input',
        name: 'employeeName',
        message: 'What is the first and last name of the employee?',
        when: (data) => data.allOptions === 'Add an Employee'
        },
        {
        type: 'input',
        name: 'employeeRole',
        message: 'What is the role of the employee?',
        when: (data) => data.allOptions === 'Add an Employee'
        },
        {
        type: 'input',
        name: 'employeeManager',
        message: 'Who is the manager of the employee?',
        when: (data) => data.allOptions === 'Add an Employee' ///need to add employee info into the database
        },
        {
        type: 'list',
        name: 'whichEmployee',
        message: 'Which Employee would you like to update?',
        choices: ['test 1', 'test 2'], ///need to add list of employees here
        when: (data) => data.allOptions === 'Update an Employee Role'
        },
        {
        type: 'input',
        name: 'employeeRoleUpdate',
        message: 'Please input which role you would like to update for this employee',
        when: (data) => data.allOptions === 'Update an Employee Role' //need to update role of the employee after this is answered
        }
    ])
}
promptAllOptions().then(sampleAnswer => {
    loopAllOptions()
})

const loopAllOptions = () => {
    promptAllOptions().then(answers => {
        switch (answers.allOptions) {
            case "View All Departments":
            loopAllOptions();
            break;

            case "View All Employees":
            loopAllOptions();
            break;

            case "View All Roles":
            loopAllOptions();
            break;

            case "Add a Department":
            loopAllOptions();
            break;

            case "Add a Role":
            loopAllOptions();
            break;

            case "Add an Employee":
            loopAllOptions();
            break;

            case "Update an Employee Role":
            loopAllOptions();
            break;

        }
    })
}