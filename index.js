const inquirer = require('inquirer'); ///requiring inquirer here
const Database = require('./server.js'); //requiring DB class from server file

//inquirer function prompts when user runs this file
const promptAllOptions = () => {
     inquirer.prompt([
        {
        type: 'list',
        name: 'allOptions',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
        },
        {
         type: 'input',
         name: 'departmentName',
         message: 'What is the name of the department you would like to add?', 
         when: (data) => data.allOptions === 'Add a Department' 
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
         when: (data) => data.allOptions === 'Add a Role' 
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
         when: (data) => data.allOptions === 'Add an Employee' 
         },
         {
         type: 'input',
         name: 'whichEmployee',
         message: 'Which Employee would you like to update?',
         when: (data) => data.allOptions === 'Update an Employee Role'
         },
         {
         type: 'input',
         name: 'employeeRoleUpdate',
         message: 'Please input which role you would like to update for this employee:',
         when: (data) => data.allOptions === 'Update an Employee Role' 
         }
    ])
    .then(answers => {
        switch (answers.allOptions) {
            case "View All Departments":
            Database.showAllDepartments().then((results) => { ///show department function runs here
            console.table(results);
            promptAllOptions();
            })
            break;

            case "View All Employees":
            Database.showAllEmployees().then((results) => { ////show employee function runs here
            console.table(results);
            promptAllOptions();
            })
            break;

            case "View All Roles":
            Database.showAllRoles().then((results) => { ///show all roles function runs here
            console.table(results);
            promptAllOptions();
            })
            break;

            case "Add a Department":
            Database.addDepartment(answers.departmentName).then((results) => { ///add department function runs here
            console.log("Adding a department has succeeded.");
            promptAllOptions();
            })
            break;

            case "Add a Role":
            Database.addRole(answers.roleName, answers.roleSalary, answers.roleDepartment).then((results) => { ///add role function runs here
            console.log('Adding a role has succeeded.');
            promptAllOptions();
            })
            break;

            case "Add an Employee": ///add employee function runs here
            Database.addEmployee(answers.employeeFirst, answers.employeeLast, answers.employeeRole, answers.employeeDepartment, answers.employeeManager).then((results) => {
            console.log('Adding an employee has succeeded.');
            promptAllOptions();
            })
            break;

            case "Update an Employee Role":
            Database.updateEmployee(answers.whichEmployee, answers.employeeRoleUpdate).then((results) => { //updating employee role function runs here
            console.log('Employee role has been updated.');
            promptAllOptions();
            })
            break;
        }
    })
}

promptAllOptions(); //calling prompt all functions here
