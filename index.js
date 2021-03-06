const inquirer = require('inquirer');
const fs = require('fs');
const Database = require('./server.js')
//const cTable = require('console.table');
// const connection = require('./server.js')
// const showAllDepartments = require('./server.js')
// const showAllRoles = require('./server.js')
// const showAllEmployees = require('./server.js')

// let showAllDepartments = () => {
//     return new Promise ((resolve, reject) => {
//      connection.query(
//          'SELECT * FROM department;',
//          function (err, results, fields) {
//            if (err) {
//              reject(err)
//            } else {
//           // let departmentTable = cTable([
//            //    {
               
//              //  }
//           // ])
//            resolve(results)
//             // return console.log(results)
//             //return results
//            }
//          }
//     )
//      })
//    }


const promptAllOptions = () => {
     inquirer.prompt([
        {
        type: 'list',
        name: 'allOptions',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
        // {
        // name: 'viewDepartments',
        // message: showAllDepartments, ///need to input function here
        // when: (data) => data.allOptions === 'View All Departments'
        // },
        // {
        // name: 'viewRoles',
        // message: showAllRoles, ///need to input function here
        // when: (data) => data.allOptions === 'View All Roles'
        // },
        // {
        // name: 'viewEmployees',
        // message: showAllEmployees, ///need to input function here
        // when: (data) => data.allOptions === 'View All Employees'
        // },
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
         name: 'employeeFirst',
         message: 'What is the first name of the employee?',
         when: (data) => data.allOptions === 'Add an Employee'
         },
         {
         type: 'input',
         name: 'employeeLast',
         message: 'What is the last name of the employee?',
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
         name: 'employeeDepartment',
         message: 'What department is the employee in?',
         when: (data) => data.allOptions === "Add an Employee"
         },
         {
         type: 'input',
         name: 'employeeManager',
         message: 'Who is the manager of the employee?',
         when: (data) => data.allOptions === 'Add an Employee' ///need to add employee info into the database
         },
        // {
        // type: 'list',
        // name: 'whichEmployee',
        // message: 'Which Employee would you like to update?',
        // choices: ['test 1', 'test 2'], ///need to add list of employees here
        // when: (data) => data.allOptions === 'Update an Employee Role'
        // },
        // {
        // type: 'input',
        // name: 'employeeRoleUpdate',
        // message: 'Please input which role you would like to update for this employee',
        // when: (data) => data.allOptions === 'Update an Employee Role' //need to update role of the employee after this is answered
        // }
    ])
    .then(answers => {
        switch (answers.allOptions) {
            case "View All Departments":
            Database.showAllDepartments().then((results) => {
            console.table(results)
            promptAllOptions()
            })
            //promptAllOptions()
            break;

            case "View All Employees":
            Database.showAllEmployees().then((results) => {
            console.table(results)
            promptAllOptions()
            })
           // promptAllOptions()
            //loopAllOptions();
            break;

            case "View All Roles":
            Database.showAllRoles().then((results) => {
            console.table(results)
            promptAllOptions()
            })

           // promptAllOptions()
            //loopAllOptions();//
            break;

            case "Add a Department":
            Database.addDepartment(answers.departmentName).then((results) => {
            console.log("this works.")
            promptAllOptions()
            })
               // promptAllOptions()
           // loopAllOptions();
            break;

            case "Add a Role":
            Database.addRole(answers.roleName, answers.roleSalary, answers.roleDepartment).then((results) => {
            console.log('Adding a role succeeded.')
            promptAllOptions()
            })
           // promptAllOptions()
            //loopAllOptions();
            break;

            case "Add an Employee":
            Database.addEmployee(answers.employeeFirst, answers.employeeLast, answers.employeeRole, answers.employeeDepartment, answers.employeeManager).then((results) => {
            console.log('Adding an employee succeeded.')
            promptAllOptions()
            })
            //promptAllOptions()
           // loopAllOptions();
            break;

            case "Update an Employee Role":
            promptAllOptions()
            //loopAllOptions();
            break;

        }
    })
}

// promptAllOptions().then(sampleAnswer => {
//     loopAllOptions()

//

const loopAllOptions = () => {
//     promptAllOptions().then(answers => {
//         switch (answers.allOptions) {
//             case "View All Departments":
//             showAllDepartments()
//             loopAllOptions();
//             break;

//             case "View All Employees":
//             loopAllOptions();
//             break;

//             case "View All Roles":
//             loopAllOptions();
//             break;

//             case "Add a Department":
//             loopAllOptions();
//             break;

//             case "Add a Role":
//             loopAllOptions();
//             break;

//             case "Add an Employee":
//             loopAllOptions();
//             break;

//             case "Update an Employee Role":
//             loopAllOptions();
//             break;

//         }
//     })
 }
promptAllOptions()
//