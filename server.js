const mysql = require('mysql2');
const cTable = require('console.table');
const { reject } = require('lodash');
const { resolve } = require('path');

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

    showAllEmployees = () => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'SELECT * FROM employee;',
                function (err, results, fields) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
     }
  
    showAllRoles = () => {
     return new Promise ((resolve, reject) => {
         this.connection.query(
             'SELECT * FROM roles;',
             function (err, results, fields) {
                 if (err) {
                     reject(err)
                 } else {
                     resolve(results)
                 }
             }
         )
     })
  }

  
  
  
   showAllDepartments = () => {
     return new Promise ((resolve, reject) => {
      this.connection.query(
          'SELECT * FROM department;',
          function (err, results, fields) {
            if (err) {
              reject(err)
            } else {
            resolve(results)
            }
          }
        )
      })
    }

    addDepartment = (department) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'INSERT INTO department(departmentName) VALUES (?)', department, 
                function (err, results, fields) {
                  if (err) {
                    reject(err)
                  } else {
                  resolve(results)
                  }
                }
           )
        })
    }

    addRole = (title, salary, departmentName) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'INSERT INTO roles(title, salary, departmentName) VALUES (?, ?, ?)', [title, salary, departmentName],
                function (err, results, fields) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    addEmployee = (firstName, lastName, jobTitle, departmentName, manager ) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'INSERT INTO employee(first_name, last_name, jobTitle, departmentName, manager) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, jobTitle, departmentName, manager],
                function (err, results, fields) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }

    updateEmployee = (firstName, jobTitle) => {
        return new Promise ((resolve, reject) => {
            this.connection.query(
                'UPDATE employee SET jobTitle = ? WHERE first_name = ?', [jobTitle, firstName],
                function (err, results, fields) {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(results)
                    }
                }
            )
        })
    }
}

 module.exports = new Database()

  