///global variables being declared here
const mysql = require('mysql2'); //requiring mysql
const cTable = require('console.table');
const { reject } = require('lodash');
const { resolve } = require('path');

///creating a Database class where i can establish the mysql connection
class Database {
    constructor () {
        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'Tenniskid1',
            database: 'work_db'
          });
          
            this.connection.connect(err => {
                if (err) throw err;
              });
    }

    //creating a show all employees function
    showAllEmployees = () => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'SELECT * FROM employee;',
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            )
        })
     }
  
    //created a show all roles function
    showAllRoles = () => {
     return new Promise ((resolve, reject) => {
         this.connection.query(
             'SELECT * FROM roles;',
             function (err, results, fields) {
                 if (err) {
                     reject(err);
                 } else {
                     resolve(results);
                 }
             }
         )
     })
  }

  //Created a show all departments function
   showAllDepartments = () => {
     return new Promise ((resolve, reject) => {
      this.connection.query(
          'SELECT * FROM department;',
          function (err, results, fields) {
            if (err) {
              reject(err);
            } else {
            resolve(results);
            }
          }
        )
      })
    }

    //Created a function to add a department which saves in the DB
    addDepartment = (department) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'INSERT INTO department(departmentName) VALUES (?)', department, 
                function (err, results, fields) {
                  if (err) {
                    reject(err);
                  } else {
                  resolve(results);
                  }
                }
           )
        })
    }

    //Created a function to add a role which saves in the DB
    addRole = (title, salary, departmentName) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'INSERT INTO roles(title, salary, departmentName) VALUES (?, ?, ?)', [title, salary, departmentName],
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            )
        })
    }

    //Created a function to add an employee which saves in the DB
    addEmployee = (firstName, lastName, jobTitle, departmentName, manager ) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'INSERT INTO employee(first_name, last_name, jobTitle, departmentName, manager) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, jobTitle, departmentName, manager],
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            )
        })
    }

    //Created a function to update the employee role who is already saved in DB
    updateEmployee = (firstName, jobTitle) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'UPDATE employee SET jobTitle = ? WHERE first_name = ?', [jobTitle, firstName],
                function (err, results, fields) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            )
        })
    }
}

 module.exports = new Database(); //exporting Database class to use in other files

  