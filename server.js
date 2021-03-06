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
               // console.log('connected as id ' + connection.threadId);
                // showAllDepartments();
                // showAllRoles();
                // showAllEmployees();
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
           // let departmentTable = cTable([
            //    {
                
              //  }
           // ])
            resolve(results)
             // return console.log(results)
             //return results
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
                 // let departmentTable = cTable([
                  //    {
                      
                    //  }
                 // ])
                  resolve(results)
                   // return console.log(results)
                   //return results
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
    /// EXAMPLE -> 'INSERT INTO employee(first_name, last_name, role_id, jobTitle, departmentName, salary, manager) VALUES (?, ?, ?, ?, ?, ?, ?), ['argument 1', 'argument 2', 'arg3'],
    /// 
}

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'Tenniskid1',
//   database: 'work_db'
// });



//   showAllEmployees = () => {
//       connection.query(
//           'SELECT * FROM employee;',
//           function (err, results, fields) {
//               if (err) {
//                   throw err
//               } else {
//                  // console.log(results)
//                   //return console.log(results)
//                   return results
//               }
//           }
//       )
//   }

//   showAllRoles = () => {
//     connection.query(
//         'SELECT * FROM roles;',
//         function (err, results, fields) {
//             if (err) {
//                 throw err
//             } else {
//                // console.log(results)
//                 return results
//             }
//         }
//     )
// }



//  let showAllDepartments = () => {
//    return new Promise ((resolve, reject) => {
//     connection.query(
//         'SELECT * FROM department;',
//         function (err, results, fields) {
//           if (err) {
//             reject(err)
//           } else {
//          // let departmentTable = cTable([
//           //    {
              
//             //  }
//          // ])
//           resolve(results)
//            // return console.log(results)
//            //return results
//           }
//         }
//    )
//     })
//   }
    // connection.query(
    //   'SELECT * FROM department;',
    //   function (err, results, fields) {
    //     if (err) {
    //       throw err
    //     } else {
    //    // let departmentTable = cTable([
    //     //    {
            
    //       //  }
    //    // ])
    //     console.log(results)
    //      // return console.log(results)
    //      //return results
    //     }
    //   }
  
    // )




//connection.end(); using this temporarily
    


 module.exports = new Database()
//   module.exports = connection
//   module.exports = showAllDepartments
//   module.exports = showAllRoles 
//   module.exports = showAllEmployees
  
  